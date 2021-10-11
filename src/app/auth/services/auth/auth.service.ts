import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrls, BASE_URL } from 'src/app/apiUrls';
import { UserStoreService } from 'src/app/services/user/user-store.service';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { LoginPayload, RegistrationPayload } from './interfaces/payloads';
import { LoginResponse, RegistratinResponse } from './interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorised$$ = new BehaviorSubject(false);
  public isAuthorised$ = this.isAuthorised$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private router: Router,
    private userStoreService: UserStoreService
  ) {
    this.getLoginState();
  }

  private getLoginState(): void {
    let token = this.sessionStorageService.getToken('bearerToken');
    if (token) {
      this.isAuthorised$$.next(true);
    }
  }

  public login(loginData: LoginPayload): void {
    this.http.post<LoginResponse>(BASE_URL + apiUrls.AUTH.LOGIN, loginData).subscribe((resp: LoginResponse) => {
      if (resp.successful) {
        this.isAuthorised$$.next(true);
        this.sessionStorageService.setToken('bearerToken', resp.result);
        this.router.navigate(['/courses']);
        this.userStoreService.getMe();
      }
    });
  }

  public logout(): Observable<void> {
    return this.http.delete(BASE_URL + apiUrls.AUTH.LOGOUT).pipe(
      map(() => {
        this.sessionStorageService.deleteToken('bearerToken');
        this.isAuthorised$$.next(false);
        this.userStoreService.removeUserData();
      })
    );
  }

  public register(registrationData: RegistrationPayload): void {
    this.http
      .post<RegistratinResponse>(BASE_URL + apiUrls.AUTH.REGISTER, registrationData)
      .subscribe((resp: RegistratinResponse) => {
        if (resp.successful) {
          this.sessionStorageService.setToken('registrationSuccessful', 'true');
          this.router.navigate(['/login']);
        }
      });
  }
}
