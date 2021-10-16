import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/services/authors/interfaces/author';

export enum AuthorsActionTypes {
  requestAuthors = '[AuthorRequest] requestAuthors',
  requestAuthorsSuccess = '[AuthorRequest] requestAuthorsSuccess',
  requestAuthorsFail = '[AuthorRequest] requestAuthorsFail',
  requestAddAuthor = '[AuthorRequest] requestAddAuthor',
  requestAddAuthorSuccess = '[AuthorRequest] requestAddAuthorSuccess',
  requestAddAuthorFail = '[AuthorRequest] requestAddAuthorFail',
  resetAddedAuthor = '[AuthorRequest] resetAddedAuthor',
}

export const requestAuthors = createAction(AuthorsActionTypes.requestAuthors);

export const requestAuthorsSuccess = createAction(
  AuthorsActionTypes.requestAuthorsSuccess,
  props<{ authors: Author[] }>()
);

export const requestAuthorsFail = createAction(AuthorsActionTypes.requestAuthorsFail, props<{ err: string }>());

export const requestAddAuthor = createAction(AuthorsActionTypes.requestAddAuthor, props<{ author: Author }>());

export const requestAddAuthorSuccess = createAction(
  AuthorsActionTypes.requestAddAuthorSuccess,
  props<{ author: Author }>()
);

export const requestAddAuthorFail = createAction(AuthorsActionTypes.requestAddAuthorFail);

export const resetAddedAuthor = createAction(AuthorsActionTypes.resetAddedAuthor);
