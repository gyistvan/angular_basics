import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Course } from 'src/app/services/courses/interfaces/course';
import { CoursePayload } from 'src/app/services/courses/interfaces/coursePayload';
import { State } from 'src/app/store';
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse,
} from './courses.actions';
import {
  getAllCourses,
  getCourse,
  getCourses,
  getErrorMessage,
  isAllCoursesLoading,
  isSearchingState,
  isSingleCourseLoading,
} from './courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesStateFacade {
  public isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoading));
  public isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoading));
  public isSearchingState$ = this.store.pipe(select(isSearchingState));
  public courses$ = this.store.pipe(select(getCourses));
  public allCourses$ = this.store.pipe(select(getAllCourses));
  public course$ = this.store.pipe(select(getCourse));
  public errorMessage$ = this.store.pipe(select(getErrorMessage));

  constructor(private store: Store<State>) {}

  public getAllCourses() {
    this.store.dispatch(requestAllCourses());
  }

  public getSingleCourse(id: string) {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  public getFilteredCourses(filterStr: string) {
    this.store.dispatch(requestFilteredCourses({ filterStr }));
  }

  public editCourse(course: CoursePayload, id: string) {
    this.store.dispatch(requestEditCourse({ course, id }));
  }

  public createCourse(course: CoursePayload) {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  public deleteCourse(id: string) {
    this.store.dispatch(requestDeleteCourse({ id }));
  }
}
