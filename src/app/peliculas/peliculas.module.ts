import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltaPeliculasComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }