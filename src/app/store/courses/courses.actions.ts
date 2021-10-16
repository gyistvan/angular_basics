import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/services/courses/interfaces/course';
import { CoursePayload } from 'src/app/services/courses/interfaces/coursePayload';

export enum CoursesActionTypes {
  requestAllCourses = '[Courses] requestAllCourses',
  requestAllCoursesSuccess = '[Courses] requestAllCoursesSuccess',
  requestAllCoursesFail = '[Courses] requestAllCoursesFail',
  requestSingleCourse = '[Courses] requestSingleCourse',
  requestSingleCourseSuccess = '[Courses] requestSingleCourseSuccess',
  requestSingleCourseFail = '[Courses] requestSingleCourseFail',
  requestFilteredCourses = '[Courses] requestFilteredCourses',
  requestFilteredCoursesSuccess = '[Courses] requestFilteredCoursesSuccess',
  requestDeleteCourse = '[Courses] requestDeleteCourse',
  requestDeleteCourseFail = '[Courses] requestDeleteCourseFail',
  requestEditCourse = '[Courses] requestEditCourse',
  requestEditCourseSuccess = '[Courses] requestEditCourseSuccess',
  requestEditCourseFail = '[Courses] requestEditCourseFail',
  requestCreateCourse = '[Courses] requestCreateCourse',
  requestCreateCourseSuccess = '[Courses] requestCreateCourseSuccess',
  requestCreateCourseFail = '[Courses] requestCreateCourseFail',
}

export const requestAllCourses = createAction(CoursesActionTypes.requestAllCourses);

export const requestAllCoursesSuccess = createAction(
  CoursesActionTypes.requestAllCoursesSuccess,
  props<{ courses: Course[] }>()
);
export const requestAllCoursesFail = createAction(CoursesActionTypes.requestAllCoursesFail, props<{ error: string }>());

export const requestSingleCourse = createAction(CoursesActionTypes.requestSingleCourse, props<{ id: string }>());

export const requestSingleCourseSuccess = createAction(
  CoursesActionTypes.requestSingleCourseSuccess,
  props<{ course: Course }>()
);

export const requestSingleCourseFail = createAction(
  CoursesActionTypes.requestSingleCourseFail,
  props<{ error: string }>()
);

export const requestFilteredCourses = createAction(
  CoursesActionTypes.requestFilteredCourses,
  props<{ filterStr: string }>()
);

export const requestFilteredCoursesSuccess = createAction(
  CoursesActionTypes.requestFilteredCoursesSuccess,
  props<{ courses: Course[] }>()
);

export const requestDeleteCourse = createAction(CoursesActionTypes.requestDeleteCourse, props<{ id: string }>());

export const requestDeleteCourseFail = createAction(
  CoursesActionTypes.requestDeleteCourseFail,
  props<{ error: string }>()
);

export const requestEditCourse = createAction(
  CoursesActionTypes.requestEditCourse,
  props<{ course: CoursePayload; id: string }>()
);

export const requestEditCourseSuccess = createAction(
  CoursesActionTypes.requestEditCourseSuccess,
  props<{ editedCourse: Course }>()
);

export const requestEditCourseFail = createAction(CoursesActionTypes.requestEditCourseFail, props<{ error: string }>());

export const requestCreateCourse = createAction(
  CoursesActionTypes.requestCreateCourse,
  props<{ course: CoursePayload }>()
);

export const requestCreateCourseSuccess = createAction(
  CoursesActionTypes.requestCreateCourseSuccess,
  props<{ course: Course }>()
);

export const requestCreateCourseFail = createAction(
  CoursesActionTypes.requestCreateCourseFail,
  props<{ error: string }>()
);
