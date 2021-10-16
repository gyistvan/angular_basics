import { Component, Input } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors/authors-store.service';
import { Author } from 'src/app/services/authors/interfaces/author';
import { Course } from 'src/app/services/courses/interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course!: Course;

  authors: Author[] = [];

  constructor(private authorsStoreService: AuthorsStoreService) {
    this.authorsStoreService.getAll().subscribe((authors) => (this.authors = authors));
  }

  public getAuthorNames(): string[] {
    return this.course.authors.map((authorId: string) => this.authors.find((author) => author.id === authorId)!.name);
  }
}
