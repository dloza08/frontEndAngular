import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  education: Education = {
  id: Number = null,
  ed_titulo: '',
  ed_descripcion: '',
  ed_institucion: '',
  ed_urllogo: '',
  ed_tipo: '',    
  
}
  
  submitted = false;
   
  myForm:FormGroup; 

  constructor(private fb:FormBuilder, 
    private educationService:EducationService,
    private router:Router, private dialog: MatDialog
    ) { }


  ngOnInit(): void {
    this.myForm=this.fb.group({
      id: ['',],
      ed_titulo:['', [Validators.required, Validators.maxLength(255)]],
      ed_descripcion:['', [Validators.required, Validators.maxLength(300)]],
      ed_institucion:['', [Validators.required, Validators.maxLength(255)]],
      ed_urllogo:['', [Validators.required, Validators.maxLength(300)]],
      ed_tipo:['', [Validators.required, Validators.maxLength(255)]], 
      
      })  
  }

  addEducation(): void {
    
    const data = this.myForm.value 
      
    this.educationService.save(data)
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
