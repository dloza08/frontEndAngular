import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';



@Injectable({
  providedIn: 'root'
})
export class SkillService {

 baseUrl = 'http://localhost:8080/api/';

 //baseUrl = 'https://beporfolio.herokuapp.com/api/';
 
constructor(private http: HttpClient) { }
 
 public verSkill(): Observable<Skill[]>{
     return this.http.get<Skill[]>(this.baseUrl + 'listar/skill');
 }
 
 public buscarID(id: number): Observable<Skill> {
     return this.http.get<Skill>(this.baseUrl + `buscar/skill/${id}`);
 }
 
 public save(skill: Skill): Observable<any> {
   return this.http.post<any>(this.baseUrl + 'new/skill', skill); 
  
  }
 
  public delete(id: string): Observable<Skill>{
   return this.http.delete<any>(this.baseUrl + `delete/skill/${id}`);
 }
 
 
}
