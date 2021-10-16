import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors/authors.service';
import { AuthorsActionTypes, requestAddAuthorSuccess, requestAuthorsSuccess } from './authors.actions';

@Injectable()
export class AuthorsEffects {
  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActionTypes.requestAuthors),
      mergeMap(() =>
        this.authorsService.getAll().pipe(
          map((authors) => requestAuthorsSuccess({ authors })),
          catchError(() => of({ type: AuthorsActionTypes.requestAuthorsFail }))
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorsActionTypes.requestAddAuthor),
      mergeMap((author) =>
        this.authorsService.addAuthor(author).pipe(
          map((author) => requestAddAuthorSuccess({ author })),
          catchError(() => of({ type: AuthorsActionTypes.requestAuthorsFail }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authorsService: AuthorsService) {}
}
