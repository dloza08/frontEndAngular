import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditEducacionComponent } from './edicion/edit-educacion/edit-educacion.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { EditExperienciaComponent } from './edicion/edit-experiencia/edit-experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditSkillComponent } from './edicion/edit-skill/edit-skill.component';
import { EditProyectoComponent } from './edicion/edit-proyecto/edit-proyecto.component';
import { EditProfileComponent } from './edicion/edit-profile/edit-profile.component';
import { EditBannerComponent } from './edicion/edit-banner/edit-banner.component';
import { EditImgprofileComponent } from './edicion/edit-imgprofile/edit-imgprofile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddExperienciaComponent } from './agregar/add-experiencia/add-experiencia.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AddEducacionComponent } from './agregar/add-educacion/add-educacion/add-educacion.component';
import { AddProyectoComponent } from './agregar/add-proyecto/add-proyecto/add-proyecto.component';
import { AddSkillComponent } from './agregar/add-skill/add-skill/add-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    EducacionComponent,
    SkillComponent,
    ExperienciaComponent,
    ProfileComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    NavbarComponent,
    EditSkillComponent,
    EditProyectoComponent,
    EditProfileComponent,
    EditBannerComponent,
    EditImgprofileComponent,
    LoginComponent,
    HomeComponent,
    AddExperienciaComponent,
    AddEducacionComponent,
    AddProyectoComponent,
    AddSkillComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule
    
       
        
  ],
  entryComponents:[LoginComponent],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }



