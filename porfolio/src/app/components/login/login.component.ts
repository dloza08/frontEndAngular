import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     isLogged = false;
     isLogginFail = false;
     loginUsuario: LoginUsuario;
     nombreUsuario: string;
     password: string;
     roles: string[] = [];
     errMsj: string;
     myForm:FormGroup;
     constructor(private tokenService: TokenService, private authService: AuthService, private router: Router,private fb:FormBuilder, private dialog: MatDialog){
        
      this.myForm=this.fb.group({
       nombreUsuario:['', [Validators.required]],
       password: ['', [Validators.required]],
      })
     }
 
  
    
    
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  get Email()
  {
  return this.myForm.get('nombreUsuario');
  }

  get Password()
  {
  return this.myForm.get('password');
  }

  

  onLogin(): void{
     this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data =>{
       this.isLogged = true;
       this.isLogginFail = false;
       this.tokenService.setToken(data.token);
       this.tokenService.setUserName(data.nombreUsuario);
       this.tokenService.setAuthorities(data.authorities);
       this.roles = data.authorities;
       //this.router.navigate(['home']);
       this.dialog.closeAll();
      window.location.reload();
     }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        alert (this.errMsj);
          
       
      } )
   
  }
  public myError = (controlName: string, errorName: string) =>{
  return this.myForm.controls[controlName].hasError(errorName);
  }

 

}