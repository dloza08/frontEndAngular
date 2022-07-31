import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { MatDialog } from '@angular/material/dialog';
import { EditProyectoComponent } from 'src/app/edicion/edit-proyecto/edit-proyecto.component';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { AddProyectoComponent } from 'src/app/agregar/add-proyecto/add-proyecto/add-proyecto.component';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  id ='';
  arrayProj:Project[]=[]; 
  constructor(public dialog:MatDialog, private projectService: ProjectService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarProject();
    if(this.tokenService.getToken()){ 
      this.isLogged=true;
    } else {
      this.isLogged=false;
    } 
  }

 addProject(){
    const dialogRef = this.dialog.open(AddProyectoComponent);
 }
  
 cargarProject(): void{
  this.projectService.verProject().subscribe(data => {this.arrayProj = data});
 
}



 editarProject(id: number){
  
      const dialogRef = this.dialog.open(EditProyectoComponent,{data :id });
    
}
    
  eliminarProject(id: number) {
     this.projectService.delete(id.toString()).subscribe(
       data => {
         
         window.location.reload();
      },
       err => {
        alert('No se pudo eliminar');
      }
    )
  }


  getID(id:number):void{
    this.projectService.buscarID(id).subscribe(
      res => {
        const {id} = res
        console.log(res)
        const dialogRef = this.dialog.open(EditProyectoComponent );
        
      }
    ) 
  }

}