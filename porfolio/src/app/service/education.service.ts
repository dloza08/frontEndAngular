import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from '../models/education';   


@Injectable({
  providedIn: 'root'
})
export class EducationService {


baseUrl = 'http://localhost:8080/api/';

//baseUrl = 'https://beporfolio.herokuapp.com/api/';

constructor(private http:HttpClient) { }

 public verEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.baseUrl + 'listar/educacion');
 }
 
 public buscarID(id: number): Observable<Education>{
    return this.http.get<Education>(this.baseUrl + `buscar/educacion/${id}`);
 }

 public save(education: Education): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'new/educacion', education); 
 
 }
 
 public delete(id: string): Observable<Education>{
  return this.http.delete<any>(this.baseUrl + `delete/educacion/${id}`);
}

}