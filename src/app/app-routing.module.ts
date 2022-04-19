import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'usuarios', component :  UsuariosComponent},
  {path : 'roles', component : RolesComponent},
  {path: 'administracion', component : AdministracionComponent},
  {path : 'inventario', component: InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
