import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedServicesService } from '../hardcode/hard-coded-services.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService {

  constructor(public hardcodedauthentication: HardCodedServicesService,
    public router:Router
    ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedauthentication.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
