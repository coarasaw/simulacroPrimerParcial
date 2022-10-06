import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { Repartidor } from '../clases/repartidor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private _firestore: AngularFirestore) { }

  crearActor(actorDato:Actor){
    return this._firestore.collection('actores').add(actorDato);
  } 

  crearRepartidor(repartidorDato:Repartidor){
    return this._firestore.collection('repartidores').add(repartidorDato);
  }

  getListadoActores(): Observable<any>{
    return this._firestore.collection('actores').stateChanges();
  }

  getActores() {
    return this._firestore.collection("actores").snapshotChanges();
  }
}
