import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioCreacionDTO, usuarioDTO, usuarioEditarDTO } from './usuarios';

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
  public obtenerPorId(id: number) : Observable<usuarioEditarDTO>{

    return this.http.get<usuarioEditarDTO>(`${this.apiURL}/${id}`)
  }
  public crear(usuario: usuarioCreacionDTO) {
    return this.http.post(this.apiURL, usuario);
  }
  public editar(id: number, usuario: usuarioCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, usuario)
  }
  public activar(id: number){
    return this.http.put(`${this.apiURL}/activar/${id}`, null);
  }
  public desactivar(id: number){
    return this.http.put(`${this.apiURL}/desactivar/${id}`, null);
  }
}
