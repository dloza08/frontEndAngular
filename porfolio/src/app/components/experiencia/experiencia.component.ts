import { Component, OnInit } from '@angular/core';
import { Exp } from 'src/app/models/exp';
import { MatDialog } from '@angular/material/dialog';
import { EditExperienciaComponent } from 'src/app/edicion/edit-experiencia/edit-experiencia.component';
import { ExpService } from 'src/app/service/exp.service';
import { Router } from '@angular/router';
import { AddExperienciaComponent } from 'src/app/agregar/add-experiencia/add-experiencia.component';
import { TokenService } from 'src/app/service/token.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  id= ''; 
   arrayExp:Exp[]=[];
  
   // inyectar servicio experiencia
  constructor(public dialog:MatDialog, private expService:ExpService, private router: Router, private tokenService: TokenService ) { }
  
  isLogged = false; 
    
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){ 
      this.isLogged=true;
    } else {
      this.isLogged=false;
    } 
      
}
addExperiencia(){
  const dialogRef = this.dialog.open(AddExperienciaComponent);
}

editarExperiencia(id:number){
  
  const dialogRef = this.dialog.open(EditExperienciaComponent,{data :id });
  
  }

cargarExperiencia(): void{
    this.expService.verExperiencia().subscribe(data => {this.arrayExp = data});
   

}

eliminarExperiencia(id: number) {
  
  this.expService.delete(id.toString()).subscribe(
     data => {
       
       window.location.reload();
    },
     err => {
      alert('No se pudo eliminar');
    }
  )
}

getID(id:number):void{
  this.expService.buscarID(id).subscribe(
    res => {
      const {id} = res
      console.log(res)
      const dialogRef = this.dialog.open(EditExperienciaComponent );
      
    }
  ) 
}
}