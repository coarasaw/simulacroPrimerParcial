import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
  { path: 'bienvenido',component: BienvenidoComponent},
  { path: 'busqueda',component: BusquedaComponent },
  {
    path: 'peliculas',
          loadChildren: () => import('./peliculas/peliculas.module')
          .then(m => m.PeliculasModule)
  },
  {
    path: 'actores',
          loadChildren: () => import('./actores/actores.module')
          .then(m => m.ActoresModule)
  },
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
