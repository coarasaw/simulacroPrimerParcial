import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BienvenidoLoginComponent } from './bienvenido-login/bienvenido-login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  { path: 'bienvenido',component: BienvenidoComponent},
  { path: 'bienvenidoLogin',component: BienvenidoLoginComponent},
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
  { path: '', redirectTo: 'bienvenidoLogin', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenidoLogin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
