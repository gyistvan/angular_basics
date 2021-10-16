import { Action, createReducer, on } from '@ngrx/store';
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions';

export type UserState = {
  isAdmin: boolean;
  name?: string;
};

const initialState: UserState = {
  isAdmin: false,
  name: undefined,
};

export const userDataReducer = createReducer(
  initialState,
  on(requestCurrentUser, (state) => state),
  on(requestCurrentUserSuccess, (state, { userResponse }) => ({
    ...state,
    isAdmin: userResponse.result.role === 'admin',
    name: userResponse.result.name,
  })),
  on(requestCurrentUserFail, (state) => state)
);

export const userReducer = (state: UserState | undefined, action: Action) => userDataReducer(state, action);
