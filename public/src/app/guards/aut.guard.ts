import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../servicios/error.service';


@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {

  constructor(private router:Router,private toastr: ToastrService, _errorService: ErrorService ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let datoUsuario = JSON.parse(localStorage.getItem('user'));
      let email = datoUsuario.email;
      console.log('email ',email);

      if (email != 'admin@gmail.com') {
        this.router.navigate(['/']);
        this.toastr.error('Para esta opción debe ser ADMIN')
      }
    return true;
  }
  
}
