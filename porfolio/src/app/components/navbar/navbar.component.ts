import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(public dialog:MatDialog, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }  

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();

  }
  login(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose =true; 
      dialogConfig.autoFocus = true; 
      dialogConfig.width = "60%";
      this.dialog.open(LoginComponent);
    }
}