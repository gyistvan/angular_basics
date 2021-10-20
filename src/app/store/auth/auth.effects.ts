import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage/session-storage.service';
import { UserStateFacade } from '../user/user.facade';
import {
  AuthActionTypes,
  requestLoginFail,
  requestLoginSuccess,
  requestLogoutSuccess,
  requestRegisterFail,
  requestRegisterSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.requestLogin),
      mergeMap((loginPayload) =>
        this.authService.login(loginPayload).pipe(
          map((token: string) => {
            this.router.navigate(['/courses']);
            this.sessionStorageService.setToken('bearerToken', token);
            return requestLoginSuccess({ token });
          }),
          catchError((err) => {
            return of(requestLoginFail({ error: err }));
          })
        )
      )
    )
  );

  register$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.requestRegister),
      mergeMap((registerPayload) =>
        this.authService.register(registerPayload).pipe(
          map((msg) => {
            this.router.navigate(['/login']);
            return requestRegisterSuccess({ msg });
          }),
          catchError((err) => {
            return of(requestRegisterFail({ error: err }));
          })
        )
      )
    )
  );

  logout$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.requestLogout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/login']);
            this.sessionStorageService.deleteToken('bearerToken');
            return requestLogoutSuccess();
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {}
}
