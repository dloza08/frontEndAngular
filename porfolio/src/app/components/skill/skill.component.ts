import { Component, OnInit } from '@angular/core';
import { EditSkillComponent } from 'src/app/edicion/edit-skill/edit-skill.component';
import { Skill } from 'src/app/models/skill';
import { MatDialog } from '@angular/material/dialog';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AddSkillComponent } from 'src/app/agregar/add-skill/add-skill/add-skill.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  id ='';
  arraySkill:Skill[]=[]; 
  constructor(public dialog:MatDialog, private skillService: SkillService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

   
  
  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){ 
      this.isLogged=true;
    } else {
      this.isLogged=false;
    } 
  } 
  
 addSkill(){
    const dialogRef = this.dialog.open(AddSkillComponent);
 }
  
 cargarSkill(): void{
  this.skillService.verSkill().subscribe(data => {this.arraySkill = data});
 
}



 editarSkill(id: number){
  
      const dialogRef = this.dialog.open(EditSkillComponent,{data :id });
    
}
    
  eliminarSkill(id: number) {
     this.skillService.delete(id.toString()).subscribe(
       data => {
         
         window.location.reload();
      },
       err => {
        alert('No se pudo eliminar');
      }
    )
  }


  getID(id:number):void{
    this.skillService.buscarID(id).subscribe(
      res => {
        const {id} = res
        console.log(res)
        const dialogRef = this.dialog.open(EditSkillComponent );
        
      }
    ) 
  }

}
