import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatTableModule,
    MatPaginatorModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
