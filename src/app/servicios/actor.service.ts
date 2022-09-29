import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private _firestore: AngularFirestore) { }

  crearActor(actorDato:Actor){
    return this._firestore.collection('actores').add(actorDato);
  } 

  getListadoActores(): Observable<any>{
    return this._firestore.collection('actores').stateChanges();
  }
}
