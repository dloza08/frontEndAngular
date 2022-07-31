import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { MatDialog } from '@angular/material/dialog';
import { EditEducacionComponent } from 'src/app/edicion/edit-educacion/edit-educacion.component';
import { EducationService } from 'src/app/service/education.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { AddEducacionComponent } from 'src/app/agregar/add-educacion/add-educacion/add-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  id= ''; 
  
  arrayEducation:Education[]=[]; 

  constructor(public dialog:MatDialog, private educationService:EducationService, private router: Router, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.cargarEducation();
    if(this.tokenService.getToken()){ 
      this.isLogged=true;
    } else {
      this.isLogged=false;
    } 
  
 }
    
  
addEducation(){
  const dialogRef = this.dialog.open(AddEducacionComponent);
}

editarEducation(id:number){
  const dialogRef = this.dialog.open(EditEducacionComponent,{data :id });
  
  }

cargarEducation(): void{
    this.educationService.verEducation().subscribe(data => {this.arrayEducation = data});
   

}

eliminarEducation(id: number) {
  
  this.educationService.delete(id.toString()).subscribe(
     data => {
       
       window.location.reload();
    },
     err => {
      alert('No se pudo eliminar');
    }
  )
}

getID(id:number):void{
  this.educationService.buscarID(id).subscribe(
    res => {
      const {id} = res
      console.log(res)
      const dialogRef = this.dialog.open(EditEducacionComponent );
      
    }
  ) 
}

}