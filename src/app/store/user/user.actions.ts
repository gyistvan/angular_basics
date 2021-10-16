import { createAction, props } from '@ngrx/store';
import { UserResponse } from 'src/app/services/user/interfaces/userResponse';

export enum UserRequestActionTypes {
  getCurrentUser = '[UserRequest] getCurrentUser',
  getCurrentUserSuccess = '[UserRequest] getCurrentUserSuccess',
  getCurrentUserFail = '[UserRequest] getCurrentUserFail',
}

export const requestCurrentUser = createAction(UserRequestActionTypes.getCurrentUser);
export const requestCurrentUserSuccess = createAction(
  UserRequestActionTypes.getCurrentUserSuccess,
  props<{ userResponse: UserResponse }>()
);
export const requestCurrentUserFail = createAction(
  UserRequestActionTypes.getCurrentUserFail,
  props<{ userResponse: UserResponse }>()
);
