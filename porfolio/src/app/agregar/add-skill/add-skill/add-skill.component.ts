import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

    skill : Skill = {
    id: Number = null , 
    sk_habilidad: '',    
    sk_urllogo: '',
    
    }

    submitted = false;
    
    
    myForm:FormGroup;

  constructor(private fb:FormBuilder, private skillService: SkillService, private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      id: ['',],
      sk_habilidad:['', [Validators.required, Validators.maxLength(300)]],
      sk_urllogo:['', [Validators.required, Validators.maxLength(400)]], 
      
      })  

  }

  addSkill(): void {
    
    const data = this.myForm.value 
      
    this.skillService.save(data)
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
