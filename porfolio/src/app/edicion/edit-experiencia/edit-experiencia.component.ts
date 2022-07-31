import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
//import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Exp } from 'src/app/models/exp';
import { ExpService } from 'src/app/service/exp.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  id:'';  
 
  exp: Exp = {
  id: Number = null,    
  exp_puesto: '',
  exp_descripcion:'',
  exp_sitio: '',
  exp_urllogo: '',
  //exp_comienzo: new Date (),
  //exp_final : new Date (),
  };
  
  submitted =false;  
  myForm:FormGroup;
  
  constructor(
    private fb:FormBuilder, 
    private expService:ExpService,
    private activatedRoute:ActivatedRoute,
    private router: Router, public dialog: MatDialogRef<EditExperienciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){ }
  
    
  ngOnInit(): void {
   this.getID(this.data ) ;
   this.myForm=this.fb.group({
   id: ['',],
   exp_puesto:['', [Validators.required, Validators.maxLength(200)]],
   exp_descripcion:['', [Validators.required, Validators.maxLength(400)]],
   exp_sitio:['', [Validators.required, Validators.maxLength(150)]],
   exp_urllogo:['', [Validators.required, Validators.maxLength(400)]], 
   //exp_comienzo: ['',],
   //exp_final: ['',],
   })
  }
 


  getID(id:number):void{
    this.expService.buscarID(id).subscribe(
      res => {
        
        this.myForm.patchValue(res);
                
      }
    ) 
    }
  

    editarExperiencia(): void {
    
      const data = this.myForm.value 
        
      this.expService.save(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
            alert("Se actualizo con Exito!!!");
            window.location.reload();
          }, error: (e) => console.error(e)
           
        })
    }


  

  public myError = (controlName: string, errorName: string) =>{
  return this.myForm.controls[controlName].hasError(errorName);
   }
}
