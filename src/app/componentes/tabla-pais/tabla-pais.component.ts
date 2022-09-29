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
 /*  @Output() seSeleccionoPais: EventEmitter<any> = new EventEmitter<any>();
  public bandera: string;

  public listaPaises: Pais[] =
    [
      // { nombre: "Argentina", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-7-1536x963.jpg" },
      // { nombre: "Brasil", bandera: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png" },
      // { nombre: "Chile", bandera: "https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png" },
      // { nombre: "Uruguay", bandera: "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png" },
      // { nombre: "Paraguay", bandera: "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-large.png" },
      // { nombre: "Bolivia", bandera: "https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-1536x1050.jpg" },
    ] */

  /* constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    let name: string;
    let bandera: string;
    this._paisService.getPaises().subscribe((paises: any) => {
      for (let index = 0; index < paises.length; index++) {
        name = paises[index].name.common;
        bandera = paises[index].flags.png;
        this.listaPaises.push(new Pais(name, bandera))
      }
      this.listaPaises = this.shuffle(this.listaPaises).slice(0, 5);
    }
    )
  }

  SeleccionarPais(pais: Pais) {
    this.bandera = pais.bandera;
    this.seSeleccionoPais.emit(pais.nombre);
  }

  shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array; 
  }*/

 /*  @Input() paises: Country[] =[];

  constructor() { }

  ngOnInit(): void {
  } */

  actor:any|Actor;
  paises:Array<any>=[];
  paisSelesccionado:any|Pais;
  arrayPrueba:Array<Pais>=[{nombre:'Argentia',foto:'https://flagcdn.com/w320/gt.png'}]

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
