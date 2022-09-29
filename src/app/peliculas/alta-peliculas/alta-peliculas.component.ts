import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/servicios/error.service';
import { ToastrService } from 'ngx-toastr';
import { ActorService } from 'src/app/servicios/actor.service';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Pelicula } from '../../clases/pelicula2';
import { eTipo } from 'src/app/clases/enum.enum';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.css']
})
export class AltaPeliculasComponent implements OnInit {

  //Formulario Validar
  registrarForm: FormGroup;
  loading = false;
  public actor:string="Elegir Pais";

  constructor(public _unPelicula: PeliculaService,
              private fb: FormBuilder,
              private rutas: Router,
              private _errorService: ErrorService,
              private _actoresService: ActorService,
              private toastr: ToastrService) {

              this.registrarForm = this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  tipo: ['',Validators.required],
                  fechaDeEstreno: ['',Validators.required],
                  cantidadDePublico: ['',[Validators.required, Validators.minLength(4)]],
                  fotoDeLaPelicula: ['no la guardo aun',Validators.required],
                  apellidoActor: ['No se guarda aun',Validators.required]
              })   
  }

  ngOnInit(): void {
  }

  registar(){
    console.log('Registar');
    this.loading = true;
    const datoGrabar: Pelicula = {
      id:0,
      nombre: '',
      tipo: eTipo.Otros,
      fechaDeEstreno: '',
      cantidadDePublico: 0,
      fotoDeLaPelicula: '',
      apellidoActor: ''
    }
    this._unPelicula.crearActor(datoGrabar).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    this.rutas.navigate(['actores/listadoActores']);
  }


  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }
}
