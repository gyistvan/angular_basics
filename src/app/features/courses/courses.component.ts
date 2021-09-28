import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseAction } from 'src/app/shared/interfaces/courseActions';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  @Input() public courseList!: Course[];
  @Input() public editable!: boolean;
  @Output() courseAction = new EventEmitter<[number, CourseAction]>();

  constructor() {}

  ngOnInit(): void {}

  public buttonHandler(id: number, action: CourseAction): void {
    this.courseAction.emit([id, action]);
  }
}
