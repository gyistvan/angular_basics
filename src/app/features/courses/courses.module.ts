/*
 * Copyright © 2021 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';

const COMPONENTS = [
  CoursesComponent,
  CourseCardComponent,
  CourseListComponent,
];

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoursesModule {}
