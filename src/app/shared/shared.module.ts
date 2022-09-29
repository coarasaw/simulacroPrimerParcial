import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    MenuGralComponent,
    SpinnerComponent
  ],
  exports:[
    MenuGralComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
