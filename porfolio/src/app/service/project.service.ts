import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 
  baseUrl = 'http://localhost:8080/api/';
  
 // baseUrl = 'https://beporfolio.herokuapp.com/api/';

 constructor(private http: HttpClient) { }

public verProject(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl + 'listar/project');
}

public buscarID(id: number): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + `buscar/project/${id}`);
}

public save(project: Project): Observable<any> {
  return this.http.post<any>(this.baseUrl + 'new/project', project); 
 
 }

 public delete(id: string): Observable<Project>{
  return this.http.delete<any>(this.baseUrl + `delete/project/${id}`);
}


}

