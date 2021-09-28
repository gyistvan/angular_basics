import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseAction } from 'src/app/shared/interfaces/courseActions';
import { courses } from 'src/assets/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  public courses: Course[] = courses;

  private getCourseIndex(id: number): number {
    return this.courses.findIndex((course) => course.id === id);
  }

  private deleteCourse(id: number): void {
    let courseIndex = this.getCourseIndex(id);
    this.courses.splice(courseIndex, 1);
  }

  private getCourseName(id: number): string {
    const courseIndex = this.getCourseIndex(id);
    return this.courses[courseIndex].title;
  }

  public courseActionHandler(actionValues: [number, CourseAction]): void {
    console.log(actionValues);
    const [id, action] = actionValues;
    if (action === 'DELETE') {
      this.deleteCourse(id);
    } else if (action === 'EDIT') {
      //not yet implemented
    } else if (action === 'SHOW') {
      //not yet implemented
    }
  }

  public openModal(actionValues: [number, CourseAction]): void {
    const [id, action] = actionValues;
    this.modalService.open(`confirmModal`, {
      id,
      msg: `Are you sure to want to ${action.toLowerCase()} ${this.getCourseName(
        id
      )} course?`,
      action,
    });
  }
}