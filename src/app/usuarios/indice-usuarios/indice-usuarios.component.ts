import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { usuarioDTO } from '../usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {

  constructor( private usuariosService : UsuariosService) { }

  usuarios : usuarioDTO[];

  //Paginación
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;



  ngOnInit(): void {
    this.cargarRegistrosPaginacion(1, 10);
  }

  cargarRegistrosPaginacion(pagina: number, cantidadElementosAMostrar){

    this.usuariosService.obtenerPaginado(pagina, cantidadElementosAMostrar).subscribe({
      next: (respuesta : HttpResponse<usuarioDTO[]>) => {
        this.usuarios = respuesta.body;

        //leer cabecera
        this.cantidadTotalRegistros = respuesta.headers.get('cantidadTotalRegistros');

        console.log(this.usuarios)
      },
      error: (error) => {
        console.log(error)
      }
    })

  }

}
