import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/services/authors/interfaces/author';
import { Course } from 'src/app/services/courses/interfaces/course';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;

  public authors: Author[] = [];

  constructor(private authorsStateFacade: AuthorsStateFacade) {}

  ngOnInit(): void {
    this.authorsStateFacade.authors$.subscribe((authors) => (this.authors = authors));
  }

  public getAuthorNames(): string[] {
    return this.course.authors.map((authorId: string) => this.authors.find((author) => author.id === authorId)!.name);
  }
}
