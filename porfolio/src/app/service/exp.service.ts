import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exp } from '../models/exp';


@Injectable({
  providedIn: 'root'
})
export class ExpService {
 baseUrl = 'http://localhost:8080/api/';

 //baseUrl = 'https://beporfolio.herokuapp.com/api/';

 constructor(private http:HttpClient) { }

 public verExperiencia(): Observable<Exp[]>{
    return this.http.get<Exp[]>(this.baseUrl + 'listar/experiencia');
 }
 
 public buscarID(id: number): Observable<Exp>{
    return this.http.get<Exp>(this.baseUrl + `buscar/experiencia/${id}`);
 }

 public save(exp: Exp): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'new/experiencia', exp); 
 
 }

 
 public delete(id: string): Observable<Exp>{
  return this.http.delete<any>(this.baseUrl + `delete/experiencia/${id}`);
}


}