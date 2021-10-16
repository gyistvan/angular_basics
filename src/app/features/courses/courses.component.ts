import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/services/courses/interfaces/course';
import { ModalService } from 'src/app/services/modal/modal.service';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserStateFacade } from 'src/app/store/user/user.facade';

const FILTER_OPTIONS = [
  { filter: 'title', name: 'Title' },
  { filter: 'description', name: 'Description' },
  { filter: 'duration', name: 'Duration' },
  { filter: 'creationDate', name: 'Creation Date' },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  public isAdmin: boolean = false;
  public isLoading: boolean = false;
  public filterOptions: { name: string; filter: string }[] = FILTER_OPTIONS;

  constructor(
    private modalService: ModalService,
    private UserStateFacade: UserStateFacade,
    private coursesStateFacade: CoursesStateFacade,
    private authorsStateFacade: AuthorsStateFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorsStateFacade.getAuthors();
    this.coursesStateFacade.getAllCourses();
    this.UserStateFacade.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.coursesStateFacade.allCourses$.subscribe((courses) => (this.courses = courses));
    this.coursesStateFacade.isAllCoursesLoading$.subscribe((isLoading) => (this.isLoading = isLoading));
  }

  public courses!: Course[];

  private getCourseIndex(id: string): number {
    return this.courses.findIndex((course) => course.id === id);
  }

  private getCourseName(id: string): string {
    const courseIndex = this.getCourseIndex(id);
    return this.courses[courseIndex].title;
  }

  public searchByString(filterStr: string): void {
    this.coursesStateFacade.getFilteredCourses(filterStr);
    this.coursesStateFacade.courses$.subscribe((courses) => {
      this.courses = courses;
    });
  }

  public deleteCourse(id: string): void {
    this.coursesStateFacade.deleteCourse(id);
  }

  public navigateToAddCourse(): void {
    this.router.navigate(['/course/add']);
  }

  public openModal(id: string): void {
    this.modalService.open(`confirmModal`, {
      id,
      msg: `Are you sure to want to delete ${this.getCourseName(id)} course?`,
    });
  }
}
