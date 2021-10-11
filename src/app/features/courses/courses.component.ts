import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
import { Course } from 'src/app/services/courses/interfaces/course';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

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
    private uesrStoreService: UserStoreService,
    private coursesStoreService: CoursesStoreService
  ) {}

  ngOnInit(): void {
    this.uesrStoreService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.coursesStoreService.courses$.subscribe((courses) => (this.courses = courses));
    this.coursesStoreService.isLoading$.subscribe((isLoading) => (this.isLoading = isLoading));
  }

  public courses!: Course[];

  private getCourseIndex(id: string): number {
    return this.courses.findIndex((course) => course.id === id);
  }

  private getCourseName(id: string): string {
    const courseIndex = this.getCourseIndex(id);
    return this.courses[courseIndex].title;
  }

  public searchByString(str: string): void {
    this.coursesStoreService.filterCourse(str).subscribe((courses) => {
      this.courses = courses;
    });
  }

  public deleteCourse(id: string): void {
    this.coursesStoreService.deleteCourse(id);
  }

  public openModal(id: string): void {
    this.modalService.open(`confirmModal`, {
      id,
      msg: `Are you sure to want to delete ${this.getCourseName(id)} course?`,
    });
  }
}
