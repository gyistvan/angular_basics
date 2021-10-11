import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/services/courses/interfaces/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  @Input() public courseList!: Course[];
  @Input() public editable!: boolean;
  @Output() courseAction = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public deleteCourse(id: string): void {
    this.courseAction.emit(id);
  }

  public navigateToEditPage(id: string): void {
    this.router.navigate([`/course/edit/${id}`]);
  }
}
