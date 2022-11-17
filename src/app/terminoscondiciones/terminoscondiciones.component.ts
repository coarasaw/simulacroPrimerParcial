import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-terminoscondiciones',
  templateUrl: './terminoscondiciones.component.html',
  styleUrls: ['./terminoscondiciones.component.css']
})
export class TerminoscondicionesComponent implements OnInit {

  public formulario!: FormGroup;
  emailConectado: string;

  constructor(private router: Router) { 
    this.emailConectado = this.obtener_localstorage();
  }

  ngOnInit(): void {
  }

  aceptar(){
    this.router.navigate(['/bienvenido']);
  }

  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    return datoUsuario.email;
  }
}
