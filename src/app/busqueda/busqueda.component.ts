import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  peliculaDetalle?:Pelicula;
  elent:boolean = false;
  peliculas?:Pelicula[];

  constructor(private _peliculaService:PeliculaService) {
    this.peliculas = _peliculaService.peliculas;
   }

  ngOnInit(): void {
  }
  
  mostrarDetallePelicula(peliculaRecibida:Pelicula){
    this.peliculaDetalle= peliculaRecibida;
    this.elent = true;
  }

  peliculaAVer(){
    this.elent = false;
  }

  /* peliculaABorrar(pelicula:Pelicula){   
    const result = this._peliculaService.peliculas.filter(element => {
      return element.id != pelicula.id;
    })
    this._peliculaService.peliculas = result;
    this.elent = false;
    
    //verifico los datos por consola
    console.log("Parametro :",pelicula);
    console.log("lo borra");
    console.log("Array Borrado :",this._peliculaService.peliculas);
    console.log('Resultado :',result);
  } */

  peliculaABorrar(pelicula:Pelicula){   
    
    const result = this.peliculas.filter((obj) => {
      return obj.id != pelicula.id;
    })
    
    this.peliculas = result;
    this.elent = false;
    //verifico los datos por consola
    console.log(pelicula);
    console.log("lo borra");
    console.log(this.peliculas);
    console.log('Resultado ',result);
   
  }

  peliculaAModificar(pelicula:Pelicula){
   this._peliculaService.peliculas.forEach(element => {
      if (element.id === pelicula.id) {
          element.nombre === pelicula.nombre;
          element.cantidadDePublico === pelicula.cantidadDePublico;
          element.fechaDeEstreno === pelicula.fechaDeEstreno;
      }
    });
    this.elent = false;
  }

}
