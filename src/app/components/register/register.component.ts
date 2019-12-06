import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pass: string
  repass: string
  email: string
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }
  emailKeyup(value: string) {
    this.email = value;
  }
  passKeyup(value: string) {
    this.pass = value;
  }
  repassKeyup(value: string) {
    this.repass = value;
  }
  register() {
    if(this.pass === this.repass) {
      this.loginService.register(this.email, this.pass).subscribe(res => {
        console.log('respuesta', res);
        this.router.navigate(['/login']);
      });
    } else {
      alert("Contraseñas diferentes");
    }
  }

}
