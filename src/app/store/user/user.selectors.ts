import { createSelector } from '@ngrx/store';
import { State } from '../../store/index';
import { UserState } from './user.reducer';

export const selectUserState = (state: State) => state.userState;

export const isAdmin = createSelector(selectUserState, (state: UserState) => state.isAdmin);
export const getName = createSelector(selectUserState, (state: UserState) => state.name);
