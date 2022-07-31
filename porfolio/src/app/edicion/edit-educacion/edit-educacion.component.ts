import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';



@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  id:'';  
 
  education: Education = {
   id: Number = null,
   ed_titulo: '',
   ed_descripcion: '',
   ed_institucion: '',
   ed_urllogo: '',
   ed_tipo: '',    
    
  };


  submitted =false;
  myForm:FormGroup;

  constructor(
    private fb:FormBuilder, 
    private educationService:EducationService,
    private activatedRoute:ActivatedRoute,
    private router: Router, public dialog: MatDialogRef<EditEducacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){ }
    
     
   

  ngOnInit(): void {
    this.getID(this.data ) ;
    this.myForm=this.fb.group({
      id: ['',],
      ed_titulo:['', [Validators.required, Validators.maxLength(255)]],
      ed_descripcion:['', [Validators.required, Validators.maxLength(300)]],
      ed_institucion:['', [Validators.required, Validators.maxLength(255)]],
      ed_urllogo:['', [Validators.required, Validators.maxLength(300)]],
      ed_tipo:['', [Validators.required, Validators.maxLength(255)]], 
   
   })
  }

  getID(id:number):void{
    this.educationService.buscarID(id).subscribe(
      res => {
        
        this.myForm.patchValue(res);
                
      }
    ) 
  }
  

  editarEduc(): void {
    
      const data = this.myForm.value 
        
      this.educationService.save(data)
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
