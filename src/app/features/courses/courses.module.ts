import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDisplayComponent } from './course-display/course-display.component';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';

const COMPONENTS = [CoursesComponent, CourseCardComponent, CourseListComponent, CourseDisplayComponent];
const ROUTES = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CourseDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule, CommonModule, FormsModule],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, RouterModule],
})
export class CoursesModule {}
