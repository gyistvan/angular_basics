import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course';
import { CoursePayload } from './interfaces/coursePayload';
import { GetCourseResponse } from './interfaces/courseResponses';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject<Course[]>([]);
  public courses$ = this.courses$$.asObservable();

  private isLoading$$ = new BehaviorSubject(false);
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) {
    this.getCoursesFromBe();
  }

  public getCourses(): Observable<Course[]> {
    return this.courses$;
  }

  private getCoursesFromBe(): void {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe((courses) => {
      this.courses$$.next(courses);
      this.isLoading$$.next(false);
    });
  }

  public createCourse(course: CoursePayload): Observable<GetCourseResponse> {
    this.isLoading$$.next(true);
    return this.coursesService.addCourse(course).pipe(
      tap((resp) => {
        this.updateCoursesList(resp);
      })
    );
  }

  public editCourse(id: string, course: CoursePayload): Observable<GetCourseResponse> {
    this.isLoading$$.next(true);
    return this.coursesService.editCourse(id, course).pipe(
      tap((resp) => {
        this.updateCoursesList(resp);
      })
    );
  }

  public filterCourse(filterStr: string): Observable<Course[]> {
    return this.coursesService.filterCourses(filterStr);
  }

  private updateCoursesList(resp: GetCourseResponse): void {
    let courses = this.courses$$.value;
    let index = courses.findIndex((course) => course.id === resp.result.id);
    if (index > -1) {
      courses[index] = resp.result;
    } else {
      courses.push(resp.result);
    }
    this.courses$$.next(courses);
    this.isLoading$$.next(false);
  }

  public getCourse(id: string): Observable<Course> {
    this.isLoading$$.next(true);
    return this.coursesService.getCourse(id).pipe((course) => {
      this.isLoading$$.next(false);
      return course;
    });
  }

  public deleteCourse(id: string): void {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe(() => {
      this.getCourses().subscribe((courses) => {
        this.courses$$.next(courses.filter((course) => course.id !== id));
        this.isLoading$$.next(false);
      });
    });
  }
}
