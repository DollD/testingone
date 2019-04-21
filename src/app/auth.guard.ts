import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router){}

  canActivate(){

    if(localStorage.getItem("email") && localStorage.getItem("password")){
      return true;
    }else{
      alert("Please Login to get the Access !");
      return this.router.navigate(['login']);
    }

    
  }
  
}
