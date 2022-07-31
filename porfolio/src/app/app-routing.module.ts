import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducacionComponent } from './agregar/add-educacion/add-educacion/add-educacion.component';
import { AddExperienciaComponent } from './agregar/add-experiencia/add-experiencia.component';
import { AddProyectoComponent } from './agregar/add-proyecto/add-proyecto/add-proyecto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditEducacionComponent } from './edicion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './edicion/edit-experiencia/edit-experiencia.component';
import { EditImgprofileComponent } from './edicion/edit-imgprofile/edit-imgprofile.component';
import { EditProfileComponent } from './edicion/edit-profile/edit-profile.component';
import { EditProyectoComponent } from './edicion/edit-proyecto/edit-proyecto.component';



const routes: Routes = [
        {path:'home',component:HomeComponent},
        {path:'login',component:LoginComponent},
        {path:'add-experiencia',component:AddExperienciaComponent},
        {path:'edit-experiencia/:id', component:EditExperienciaComponent},
        {path:'add-proyecto',component:AddProyectoComponent},
        {path:'edit-proyecto/:id', component:EditProyectoComponent}, 
        {path:'edit-profile/:id', component:EditProfileComponent},
        {path:'edit-profile/:id', component:EditImgprofileComponent},  
        {path:'add-educacion',component:AddEducacionComponent},
        {path:'edit-educacion/:id', component:EditEducacionComponent}, 
        {path:'**',redirectTo:'home',pathMatch:'full'}
        
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
