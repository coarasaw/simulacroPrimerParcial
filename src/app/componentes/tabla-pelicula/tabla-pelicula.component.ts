import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit {

  @Input()  listadoPeliculas:Pelicula[]=[];
  @Output() onPeliculaSelccionada:EventEmitter<Pelicula>= new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetallePelicula(pelicula:Pelicula){
    this.onPeliculaSelccionada.emit(pelicula);
  }

}