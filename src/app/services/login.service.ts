import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(email: string, pass: string) {
    if(pass == "123" && email == "hola@hola.com") {
      return true;
    } else {
      return false;
    }
  }
}
