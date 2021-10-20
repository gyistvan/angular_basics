import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/services/authors/interfaces/author';
import { Course } from 'src/app/services/courses/interfaces/course';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.css'],
})
export class CourseDisplayComponent implements OnInit {
  public course?: Course;
  private authors: Author[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesStateFacade: CoursesStateFacade,
    private authorsStateFacade: AuthorsStateFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorsStateFacade.getAuthors();
    let courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (courseId) {
      this.coursesStateFacade.getSingleCourse(courseId);
      this.coursesStateFacade.course$.subscribe((course) => {
        this.course = course;
      });
    } else {
      this.router.navigate(['/courses']);
    }
    this.authorsStateFacade.authors$.subscribe((authors) => (this.authors = authors));
  }

  public getAuthorsName(authorIds: string[]): string[] {
    return this.authors.filter((author) => authorIds.includes(author.id)).map((author) => author.name);
  }

  public navigateToCourses(): void {
    this.router.navigate(['/courses']);
  }
}
