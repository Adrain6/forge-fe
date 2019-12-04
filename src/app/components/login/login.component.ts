import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass: string
  email: string
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  emailKeyup(value: string) {
    this.email = value;
  }
  passKeyup(value: string) {
    this.pass = value;
  }
  login() {
    if(this.loginService.login(this.email, this.pass)) {
      this.router.navigate(['/home']);
    } else {
      alert('usuario y pass inválidos');
    }
  }

}
