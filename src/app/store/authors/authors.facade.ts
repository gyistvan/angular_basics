import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Author } from 'src/app/services/authors/interfaces/author';
import { State } from 'src/app/store';
import { requestAddAuthor, requestAuthors } from './authors.actions';
import { getAddedAuthor, getAuthors, isAuthorsLoading } from './authors.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStateFacade {
  public addedAuthor$ = this.store.pipe(select(getAddedAuthor));
  public authors$ = this.store.pipe(select(getAuthors));
  public isAuthorsLoading$ = this.store.pipe(select(isAuthorsLoading));

  constructor(private store: Store<State>) {}

  public getAuthors() {
    this.store.dispatch(requestAuthors());
  }

  public addAuthor(author: Author) {
    this.store.dispatch(requestAddAuthor({ author }));
  }
}
