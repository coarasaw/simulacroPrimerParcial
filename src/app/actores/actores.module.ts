import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisComponent } from '../componentes/tabla-pais/tabla-pais.component';


@NgModule({
  declarations: [
    AltaActoresComponent,
    ListadoActoresComponent,
    TablaPaisComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
