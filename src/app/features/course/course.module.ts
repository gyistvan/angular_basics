/*
 * Copyright © 2021 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAuthorFormComponent } from './add-author-form/add-author-form.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { CourseComponent } from './course.component';

const COMPONENTS = [CourseComponent, AddAuthorFormComponent, AuthorsListComponent];

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CourseModule {}