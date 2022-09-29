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
import { TablaPaisComponent } from './componentes/tabla-pais/tabla-pais.component';
import { SharedModule } from './shared/shared.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ActoresModule } from './actores/actores.module';
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
import { PorRegionComponent } from './componentes/por-region/por-region.component';


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
    //TablaPaisComponent,
    //PorRegionComponent
  ],
  exports:[
    //TablaPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    //ActoresModule,
    //PeliculasModule,
    //ActoresModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    //toast
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    //api
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
