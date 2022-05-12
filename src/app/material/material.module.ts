import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 
    MatTableModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
