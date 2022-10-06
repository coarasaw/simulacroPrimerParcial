import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { PaisService } from 'src/app/servicios/pais.service';

//import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent implements OnInit {
 
  actor:any|Actor;
  paises:Array<any>=[];
  paisSelesccionado:any|Pais;
  //arrayPrueba:Array<Pais>=[{nombre:'Argentia',foto:'https://flagcdn.com/w320/gt.png'}]

  @Output()  eventoPaisSeleccionado : EventEmitter<Pais> = new EventEmitter<Pais>();
  //@Output() eventoPaisSeleccionado = new EventEmitter<Pais>();


  constructor(public paisService:PaisService) { }

  ngOnInit(): void {
    this.cargarPais();
  }

  cargarPais(){

    this.paises=[];
    this.paisService.getPaises().subscribe(
      (data:any) => {
        for (let index = 0; index < data.length; index++) {
          const unPais = data[index];
          let nombre = unPais.name.common;
          let foto = unPais.flags.png;
          let paisNuevo: Pais = {
            nombre:nombre,
            foto:foto
          }
          this.paises.push(paisNuevo);
        }
       this.paises= this.paises.slice(0,5);
      }
    );
    console.log('Array Paises: ', this.paises);
  }

  emitirPais(pais:Pais)
 {
    this.eventoPaisSeleccionado.emit(pais);
 }
}
