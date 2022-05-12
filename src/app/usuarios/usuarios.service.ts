import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioDTO } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  private apiURL = environment.apiURL + 'usuarios';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number) : Observable<any>{

    let params = new HttpParams();

    //agregar variable a lapetición
    params = params.append('pagina', pagina.toString());

    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());

    return this.http.get<usuarioDTO[]>(`${this.apiURL}/todosPaginacion`, {observe: 'response', params});
  }


}
