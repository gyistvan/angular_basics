import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAuthorFormComponent } from './add-author-form/add-author-form.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { CourseComponent } from './course.component';

const COMPONENTS = [CourseComponent, AddAuthorFormComponent, AuthorsListComponent];
const ROUTES = [
  { path: 'add', component: CourseComponent, canActivate: [AdminGuard] },
  { path: 'edit/:id', component: CourseComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
  declarations: COMPONENTS,
  exports: [...COMPONENTS, RouterModule],
})
export class CourseModule {}
