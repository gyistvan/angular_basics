import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { requestCurrentUser } from './user.actions';
import { getName, isAdmin } from './user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserStateFacade {
  public userName$ = this.store.pipe(select(getName));
  public isAdmin$ = this.store.pipe(select(isAdmin));

  constructor(private store: Store<State>) {}

  public getCurrentUser() {
    this.store.dispatch(requestCurrentUser());
  }
}
