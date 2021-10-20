import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { Course } from 'src/app/services/courses/interfaces/course';
import { CoursePayload } from 'src/app/services/courses/interfaces/coursePayload';
import { AuthorsStateFacade } from '../authors/authors.facade';
import {
  CoursesActionTypes,
  requestAllCourses,
  requestAllCoursesSuccess,
  requestCreateCourse,
  requestEditCourseSuccess,
  requestFilteredCoursesSuccess,
  requestSingleCourseSuccess,
} from './courses.actions';

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestAllCourses),
      mergeMap(() =>
        this.coursesService.getAll().pipe(
          map((courses) => requestAllCoursesSuccess({ courses })),
          catchError(() => of({ type: CoursesActionTypes.requestAllCoursesFail }))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestFilteredCourses),
      mergeMap((filterStr) =>
        this.coursesService.filterCourses(filterStr).pipe(map((courses) => requestFilteredCoursesSuccess({ courses })))
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestSingleCourse),
      mergeMap((id) =>
        this.coursesService.getCourse(id).pipe(
          map((course) => requestSingleCourseSuccess({ course })),
          catchError(() => of({ type: CoursesActionTypes.requestSingleCourseFail }))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestDeleteCourse),
      mergeMap((id) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => requestAllCourses()),
          catchError(() => of({ type: CoursesActionTypes.requestDeleteCourseFail }))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestEditCourse),
      mergeMap(({ id, course }) =>
        this.coursesService.editCourse(id, course).pipe(
          map((editCourseResponse: { result: Course }) =>
            requestEditCourseSuccess({ editedCourse: editCourseResponse.result })
          ),
          catchError(() => of({ type: CoursesActionTypes.requestEditCourseFail }))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActionTypes.requestCreateCourse),
      mergeMap((courseAction: { course: CoursePayload }) =>
        this.coursesService.addCourse(courseAction.course).pipe(
          map((course) => requestCreateCourse(course)),
          catchError(() => of({ type: CoursesActionTypes.requestCreateCourseFail }))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CoursesActionTypes.requestCreateCourseSuccess,
          CoursesActionTypes.requestEditCourseSuccess,
          CoursesActionTypes.requestSingleCourseFail
        ),
        mergeMap(() => this.router.navigate(['/courses']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private coursesService: CoursesService, private router: Router) {}
}
