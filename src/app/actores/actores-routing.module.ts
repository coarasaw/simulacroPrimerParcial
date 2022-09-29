import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';

const routes: Routes = [
  {path:'altActor',component:AltaActoresComponent},
  {path:'listadoActores',component:ListadoActoresComponent},
  {path: '', redirectTo: 'listadoActores', pathMatch:'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'bienvenido'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
