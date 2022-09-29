import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/* import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators'; */


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /* private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  } */

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
   // return this.http.get(`https://restcountries.com/v3.1/all`);
    return this.http.get(`https://restcountries.com/v3.1/region/Americas`);
  }

  getPaisByName(name:string)
  { 
    var url = "`https://restcountries.com/v3.1/name/${name}`";
    console.log(url);
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }


  /* getPaises() {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  getPaisByName(name: string) {
    return this.http.get("https://restcountries.com/v3.1/name/"+name);
  } */

  //lee todos los paises desde el url
 /*  getTodosLosPaises(){
    //return this.http.get("y");
    return this.http.get("https://restcountries.com/v2/regionalbloc/usan");
  } */

  /* buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  } */
}
