import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/services/courses/interfaces/course';
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestCreateCourse,
  requestCreateCourseFail,
  requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseFail,
  requestSingleCourseSuccess,
} from './courses.actions';

export type CoursesState = {
  allCourses: Course[];
  courses: Course[];
  course?: Course;
  lastDeletedCourse?: Course;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage?: string;
};

const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  isAllCoursesLoading: true,
  isSingleCourseLoading: true,
  isSearchState: false,
};

export const CoursesDataReducer = createReducer(
  initialState,
  on(requestAllCourses, (state) => ({ ...state, isAllCoursesLoading: true })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({ ...state, allCourses: courses, isAllCoursesLoading: false })),
  on(requestAllCoursesFail, (state, { error }) => ({ ...state, errorMessage: error, isAllCoursesLoading: false })),
  on(requestSingleCourse, (state) => ({ ...state, isSingleCourseLoading: true })),
  on(requestSingleCourseSuccess, (state, { course }) => ({ ...state, course: course, isSingleCourseLoading: false })),
  on(requestSingleCourseFail, (state, { error }) => ({ ...state, errorMessage: error, isSingleCourseLoading: false })),
  on(requestFilteredCourses, (state) => ({ ...state, isSearchState: true })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({ ...state, courses: courses, isSearchState: false })),
  on(requestDeleteCourse, (state, { id }) => ({
    ...state,
    allCourses: state.allCourses.filter((course) => course.id !== id),
    lastDeletedCourse: state.allCourses.find((course) => course.id === id),
    isAllCoursesLoading: true,
  })),
  on(requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    allCourses: [...state.allCourses, state.lastDeletedCourse!],
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(requestEditCourse, (state) => ({ ...state, isAllCoursesLoading: true })),
  on(requestEditCourseSuccess, (state, { editedCourse }) => ({
    ...state,
    allCourses: state.allCourses.map((course) => (course.id === editedCourse.id ? editedCourse : course)),
    isAllCoursesLoading: false,
  })),
  on(requestEditCourseFail, (state, { error }) => ({ ...state, errorMessage: error, isAllCoursesLoading: false })),
  on(requestCreateCourse, (state) => ({ ...state, isAllCoursesLoading: true })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
    isAllCoursesLoading: false,
  })),
  on(requestCreateCourseFail, (state, { error }) => ({ ...state, errorMessage: error, isAllCoursesLoading: false }))
);

export const CoursesReducer = (state: CoursesState | undefined, action: Action) => CoursesDataReducer(state, action);
