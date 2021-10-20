import { Action, createReducer, on } from '@ngrx/store';
import { Author } from 'src/app/services/authors/interfaces/author';
import {
  requestAddAuthor,
  requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess,
  resetAddedAuthor,
} from './authors.actions';

export type AuthorsState = {
  authors: Author[];
  addedAuthor: Author | null;
  isAuthorsLoading: boolean;
};

const initialState: AuthorsState = {
  authors: [],
  addedAuthor: null,
  isAuthorsLoading: false,
};

export const authorsDataReducer = createReducer(
  initialState,
  on(requestAuthors, (state) => ({ ...state, isAuthorsLoading: true })),
  on(requestAuthorsSuccess, (state, { authors }) => ({ ...state, authors, isAuthorsLoading: false })),
  on(requestAuthorsFail, (state) => ({ ...state, isAuthorsLoading: false })),
  on(requestAddAuthor, (state, { author }) => ({ ...state, addedAuthor: author, isAuthorsLoading: true })),
  on(requestAddAuthorSuccess, (state, { author }) => ({
    ...state,
    authors: [...state.authors, author],
    isAuthorsLoading: false,
  })),
  on(requestAddAuthorFail, (state) => ({ ...state, isAuthorsLoading: false })),
  on(resetAddedAuthor, (state) => ({
    ...state,
    authors: state.authors.filter((author) => author.id !== state.addedAuthor?.id),
    isAuthorsLoading: false,
  }))
);

export const authorsReducer = (state: AuthorsState | undefined, action: Action) => authorsDataReducer(state, action);
