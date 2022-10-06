import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-mostar-detalle-actor',
  templateUrl: './mostar-detalle-actor.component.html',
  styleUrls: ['./mostar-detalle-actor.component.css']
})
export class MostarDetalleActorComponent implements OnInit {

  @Input() actorDetalle: Actor;
   
  constructor() { }

  ngOnInit(): void {
  }

  Volver(){

  }
}
