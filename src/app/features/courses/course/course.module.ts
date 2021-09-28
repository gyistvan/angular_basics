import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from './course.component';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [CourseComponent],
  exports: [CourseComponent],
})
export class CourseModule {}
