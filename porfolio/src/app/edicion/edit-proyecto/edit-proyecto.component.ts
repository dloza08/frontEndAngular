import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  id:'';  
 
  project: Project = {
  id: Number = null,    
  proy_nombre: '',
  proy_descripcion: '',
  proy_urlimg: '',
    
  };

  submitted =false;  
  myForm:FormGroup;

  constructor(
    private fb:FormBuilder, 
    private projectService:ProjectService,
    private activatedRoute:ActivatedRoute,
    private router: Router, public dialog: MatDialogRef<EditProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.getID(this.data );
    this.myForm=this.fb.group({
     id: ['',],
     proy_nombre:['', [Validators.required, Validators.maxLength(200)]],
     proy_descripcion:['', [Validators.required, Validators.maxLength(200)]],
     proy_urlimg: ['', [Validators.required, Validators.maxLength(400)]],
    })
  }


  getID(id:number):void{
    this.projectService.buscarID(id).subscribe(
      res => {
        
        this.myForm.patchValue(res);
                        
      }
    ) 
    }
  
    editarProject(): void {
    
      const data = this.myForm.value 
        
      this.projectService.save(data)
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