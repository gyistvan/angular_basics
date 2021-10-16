import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { Author } from 'src/app/services/authors/interfaces/author';
import { CoursesStoreService } from 'src/app/services/courses/courses-store.service';
import { Course } from 'src/app/services/courses/interfaces/course';

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
    private coursesStoreService: CoursesStoreService,
    private authorStoreService: AuthorsStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let courseId = this.activatedRoute.snapshot.paramMap.get('id');
    if (courseId) {
      this.coursesStoreService.getCourse(courseId).subscribe((course) => {
        console.log(course);
        this.course = course;
      });
    } else {
      this.router.navigate(['/courses']);
    }
    this.authorStoreService.getAll().subscribe((authors) => (this.authors = authors));
  }

  public getAuthorsName(authorIds: string[]): string[] {
    return this.authors.filter((author) => authorIds.includes(author.id)).map((author) => author.name);
  }

  public navigateToCourses(): void {
    this.router.navigate(['/courses']);
  }
}
