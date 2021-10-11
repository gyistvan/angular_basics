import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage/session-storage.service';
import { LoginData } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: LoginData = new LoginData();

  public successfulRegistration: boolean = false;

  constructor(private authService: AuthService, private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    let successfulRegistration = this.sessionStorageService.getToken('registrationSuccessful');
    if (successfulRegistration) {
      this.successfulRegistration = true;
      setTimeout(() => {
        this.successfulRegistration = false;
        this.sessionStorageService.deleteToken('registrationSuccessful');
      }, 5000);
    }
  }

  public onFormSubmit(form: FormGroup): void {
    if (form.valid) {
      this.authService.login({
        ...form.value,
        name: this.loginForm.email === 'admin@email.com' ? 'admin' : 'Test User' /* 
        Why BE want a name here? 
        the condition is only used here because of the requirement of name.
        */,
      });
    }
  }
}
