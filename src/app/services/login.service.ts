import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headersOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    }
  };
  constructor(private http: HttpClient) { }

  public login(email: string, pass: string) {
    let body = {
      "emailDto": email,
      "passwordDto": pass
    }
    let aux = this.http.post('http://localhost:8090/api/v1/login/session', body, this.headersOptions );
    return aux;
  }

  public register(email:string, pass:string) {
    let body = {
      "email": email,
      "password": pass
    }
    let aux = this.http.post('http://localhost:8090/api/v1/login', body, this.headersOptions );
    return aux; 
  }
}
