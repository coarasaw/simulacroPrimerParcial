import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRegistrarComponent } from './login-registrar/login-registrar.component';
import { MenuRegistrarComponent } from './menu-registrar/menu-registrar.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginRegistrarComponent,
    MenuRegistrarComponent,   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
