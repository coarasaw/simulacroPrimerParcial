import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes Propios
import { LoginComponent } from './login/login.component';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'MenuRegistrar', component: MenuRegistrarComponent},  
  { path: 'registrar', component: LoginRegistrarComponent},  
  { path: '', redirectTo: 'login',pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
