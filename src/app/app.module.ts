import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MaterialModule} from './material/material.module';

import {MenuComponent} from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { InventarioComponent } from './inventario/inventario.component';

import { IndiceRolesComponent } from './roles/indice-roles/indice-roles.component';

import { IndiceUsuariosComponent } from './usuarios/indice-usuarios/indice-usuarios.component';
//Http client 
import {HttpClientModule} from '@angular/common/http'; 
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    AdministracionComponent,
    InventarioComponent,
    IndiceRolesComponent,
    IndiceUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
