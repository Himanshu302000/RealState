import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedServicesService {

  constructor() { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null);
  }

  LogOut()
  {
    sessionStorage.removeItem('authenticateUser');
  }
}
