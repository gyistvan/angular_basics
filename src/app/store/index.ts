import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { authReducer, AuthState } from './auth/auth.reducer';
import { AuthorsEffects } from './authors/authors.effects';
import { authorsReducer, AuthorsState } from './authors/authors.reducer';
import { CoursesEffects } from './courses/courses.effects';
import { CoursesReducer, CoursesState } from './courses/courses.reducer';
import { UserEffects } from './user/user.effects';
import { userReducer, UserState } from './user/user.reducer';

export interface State {
  userState: UserState;
  authState: AuthState;
  authorsState: AuthorsState;
  coursesState: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  userState: userReducer,
  authState: authReducer,
  authorsState: authorsReducer,
  coursesState: CoursesReducer,
};
export const effects: any[] = [UserEffects, AuthEffects, AuthorsEffects, CoursesEffects];
