import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
 
    proj : Project = {
    id: Number = null , 
    proy_nombre: '',
    proy_descripcion: '',
    proy_urlimg: '',
    
    }

    submitted = false;
    
    
    myForm:FormGroup;
     

  constructor(private fb:FormBuilder, private projectService: ProjectService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
   
    this.myForm=this.fb.group({
      id: ['',],
      proy_nombre:['', [Validators.required, Validators.maxLength(200)]],
      proy_descripcion:['', [Validators.required, Validators.maxLength(400)]],
      proy_urlimg:['', [Validators.required, Validators.maxLength(400)]], 
      
      })  

  }

  addProject(): void {
    
    const data = this.myForm.value 
      
    this.projectService.save(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          alert("Se agrego con Exito!!!");
          this.dialog.closeAll();
          window.location.reload();
        }, error: (e) => console.error(e)
         
      })
  }
  
   public myError = (controlName: string, errorName: string) =>{
   return this.myForm.controls[controlName].hasError(errorName);
  
   }

}
