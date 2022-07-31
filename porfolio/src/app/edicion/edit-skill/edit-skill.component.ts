import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  id:'';  
 
  skill: Skill = {
  id: Number = null,    
  sk_habilidad: '',
  sk_urllogo: '',
      
  }; 

  submitted =false; 
  myForm:FormGroup;
  constructor(
    private fb:FormBuilder, 
    private skillService:SkillService,
    private activatedRoute:ActivatedRoute,
    private router: Router, public dialog: MatDialogRef<EditSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


 
  ngOnInit(): void {
    this.getID(this.data );
    this.myForm=this.fb.group({
     id: ['',],
     sk_habilidad:['', [Validators.required, Validators.maxLength(300)]],
     sk_urllogo: ['', [Validators.required, Validators.maxLength(400)]],
    })     
 
  }

  getID(id:number):void{
    this.skillService.buscarID(id).subscribe(
      res => {
        
        this.myForm.patchValue(res);
                        
      }
    ) 
    }

   
    editarSkill(): void {
    
      const data = this.myForm.value 
        
      this.skillService.save(data)
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

