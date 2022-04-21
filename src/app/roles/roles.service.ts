import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rolesDTO } from './roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'roles';


  public obtenerTodos() : Observable<rolesDTO[]>{
    return this.http.get<rolesDTO[]>(`${this.apiURL}/todos`)
  }

}
