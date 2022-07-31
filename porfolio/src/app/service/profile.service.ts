import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 baseUrl = 'http://localhost:8080/api/';

 // baseUrl = 'https://beporfolio.herokuapp.com/api/';

  constructor(private http: HttpClient) { }
 
 public verProfile(): Observable<Profile[]>{
     return this.http.get<Profile[]>(this.baseUrl + 'listar/profile');
 }
 
 public buscarID(id: number): Observable<Profile> {
     return this.http.get<Profile>(this.baseUrl + `buscar/profile/${id}`);
 }
 
 public save(profile: Profile): Observable<any> {
   return this.http.post<any>(this.baseUrl + 'new/profile', profile); 
  
  }
 
  public delete(id: string): Observable<Profile>{
   return this.http.delete<any>(this.baseUrl + `delete/profile/${id}`);
 }

}
