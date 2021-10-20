import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { AuthorsState } from './authors.reducer';

export const selectAuthorsState = (state: State) => state.authorsState;

export const getAuthors = createSelector(selectAuthorsState, (state: AuthorsState) => state.authors);
export const getAddedAuthor = createSelector(selectAuthorsState, (state: AuthorsState) => state.addedAuthor);
export const isAuthorsLoading = createSelector(selectAuthorsState, (state: AuthorsState) => state.isAuthorsLoading);
