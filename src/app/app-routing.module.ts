import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceRolesComponent } from './roles/indice-roles/indice-roles.component';
import { IndiceUsuariosComponent } from './usuarios/indice-usuarios/indice-usuarios.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'usuarios', component :  IndiceUsuariosComponent},
  {path : 'roles', component : IndiceRolesComponent},
  {path: 'administracion', component : AdministracionComponent},
  {path : 'inventario', component: InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
