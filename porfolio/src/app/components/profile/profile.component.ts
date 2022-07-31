import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/edicion/edit-profile/edit-profile.component';
import { EditBannerComponent } from 'src/app/edicion/edit-banner/edit-banner.component';
import { EditImgprofileComponent } from 'src/app/edicion/edit-imgprofile/edit-imgprofile.component';
import { ProfileService } from 'src/app/service/profile.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id= ''; 
  arrayProfile:Profile[]=[];
  
  constructor(public dialog:MatDialog, private profileService:ProfileService, private router: Router, private tokenService: TokenService  ) { }

  isLogged = false; 

  ngOnInit(): void {
    this.cargarProfile();
    if(this.tokenService.getToken()){ 
      this.isLogged=true;
    } else {
      this.isLogged=false;
    } 
    
  }

  editarProfile(id:number){
      const dialogRef = this.dialog.open(EditProfileComponent,{data :id });
  }
  
  cargarProfile(): void{
      this.profileService.verProfile().subscribe(data => {this.arrayProfile = data});
    
  }
    
  editarBanner(id: number){
    const dialogRef = this.dialog.open(EditBannerComponent, {data :id });
  }

  editarImgprofile(id: number){
    const dialogRef = this.dialog.open(EditImgprofileComponent, {data :id });
  }

  getID(id:number):void{
    this.profileService.buscarID(id).subscribe(
      res => {
        const {id} = res
        console.log(res)
        const dialogRef = this.dialog.open(EditProfileComponent );
        
      }
    ) 
  }





}