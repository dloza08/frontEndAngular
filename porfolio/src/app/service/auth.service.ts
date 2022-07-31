import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';
import { HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authURL = 'http://localhost:8080/api/auth/';

  //authURL = 'https://beporfolio.herokuapp.com/api/auth/';

  constructor(private httpCliente: HttpClient) { }

  getOptions(){
    const valores = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return valores;
  }
  
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpCliente.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: any): Observable<any>{
    const httpOptions = this.getOptions();
    return this.httpCliente.post<any>(this.authURL + 'login', JSON.stringify(loginUsuario),httpOptions);
  }


}