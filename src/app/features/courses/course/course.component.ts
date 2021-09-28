import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() course?: Course;

  constructor() {}

  ngOnInit(): void {}

  public getAuthors(authors: string[]): string {
    return authors.join(', ');
  }
}
