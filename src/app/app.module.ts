import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Propias
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BorrarPeliculaComponent } from './componentes/borrar-pelicula/borrar-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from './componentes/modificar-pelicula/modificar-pelicula.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { SharedModule } from './shared/shared.module';

//Formularios
import { FormsModule } from '@angular/forms';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
//api
import { HttpClientModule } from '@angular/common/http';
//toast
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { BienvenidoLoginComponent } from './bienvenido-login/bienvenido-login.component';
/* import { MostarPeliculaActorComponent } from './componentes/mostar-pelicula-actor/mostar-pelicula-actor.component';
import { MostarDetalleActorComponent } from './componentes/mostar-detalle-actor/mostar-detalle-actor.component';
import { MostarPaisActorComponent } from './componentes/mostar-pais-actor/mostar-pais-actor.component';
 */

@NgModule({
  declarations: [
    AppComponent,
    //Propias
    BienvenidoComponent,
    BusquedaComponent,
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent,
    TablaPeliculaComponent,
    BienvenidoLoginComponent,
    /* MostarPeliculaActorComponent,
    MostarDetalleActorComponent,
    MostarPaisActorComponent */
    
  ],
  exports:[
    //TablaPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    //toast
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    //api
    HttpClientModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
