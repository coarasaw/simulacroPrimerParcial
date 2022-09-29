import { eTipo } from "../clases/enum.enum";

export class Pelicula {
    id: number;
    nombre: string;
    tipo: eTipo;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    fotoDeLaPelicula: string;
    apellidoActor: string;

    constructor(id:number,nombre: string, tipo: eTipo, fechaDeEstreno: string, 
                cantidadDePublico: number, fotoDeLaPelicula: string,
                apellidoActor: string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
        this.apellidoActor = apellidoActor;
    }
}
