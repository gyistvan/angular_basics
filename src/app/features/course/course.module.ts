import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAuthorFormComponent } from './add-author-form/add-author-form.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { CourseComponent } from './course.component';

const COMPONENTS = [CourseComponent, AddAuthorFormComponent, AuthorsListComponent];
const ROUTES = [
  { path: 'add', component: CourseComponent },
  { path: 'edit/:id', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, RouterModule],
})
export class CourseModule {}
