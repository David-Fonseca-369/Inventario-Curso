import { Component, OnInit } from '@angular/core';
import { rolesDTO } from '../roles';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-indice-roles',
  templateUrl: './indice-roles.component.html',
  styleUrls: ['./indice-roles.component.css']
})
export class IndiceRolesComponent implements OnInit {

  constructor(private rolesService : RolesService) { }

  roles : rolesDTO[];
  columnasAMostrar = ['nombre', 'descripcion'];

  ngOnInit(): void {


    // this.rolesService.obtenerTodos().subscribe(
    //   (roles) => {
    //     console.log(roles)
    //   },

    //   (error) => {
    //     console.error(error)
    //   }
    //)


    this.rolesService.obtenerTodos().subscribe({
      next : (roles) => {

        this.roles = roles;
      },

      error: (error) => {
        console.error(error)
      }
    })

  }


}
