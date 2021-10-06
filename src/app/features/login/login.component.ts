import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginData } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: LoginData = new LoginData();
  constructor() {}

  ngOnInit(): void {}

  public onFormSubmit(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    console.log(form);
  }
}
