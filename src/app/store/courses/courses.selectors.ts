import { createSelector } from '@ngrx/store';
import { State } from '../index';
import { CoursesState } from './courses.reducer';

export const selectCoursesState = (state: State) => state.coursesState;

export const getAllCourses = createSelector(selectCoursesState, (state: CoursesState) => state.allCourses);
export const getCourses = createSelector(selectCoursesState, (state: CoursesState) => state.courses);
export const getCourse = createSelector(selectCoursesState, (state: CoursesState) => state.course);
export const getErrorMessage = createSelector(selectCoursesState, (state: CoursesState) => state.errorMessage);
export const isAllCoursesLoading = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isAllCoursesLoading
);
export const isSearchingState = createSelector(selectCoursesState, (state: CoursesState) => state.isSearchState);
export const isSingleCourseLoading = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isSingleCourseLoading
);
