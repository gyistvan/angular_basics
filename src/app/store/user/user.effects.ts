import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { AuthStateFacade } from '../auth/auth.facade';
import { requestCurrentUserSuccess, UserRequestActionTypes } from './user.actions';

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserRequestActionTypes.getCurrentUser),
      mergeMap(() =>
        this.userService.get().pipe(
          map((userResponse) => requestCurrentUserSuccess({ userResponse })),
          catchError(() => of({ type: UserRequestActionTypes.getCurrentUserFail }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService, private authFacade: AuthStateFacade) {
    this.authFacade.isUserAuthorized$.subscribe((isAuthorised) => {
      if (isAuthorised) {
        this.getCurrentUser$;
      }
    });
  }
}
