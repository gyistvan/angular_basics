import { Component, OnInit } from '@angular/core';
import { Login } from './interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm: Login = { email: null, password: null };

  ngOnInit(): void {}

  public onFormSubmit(): void {
    console.log('asdf');
  }
}
