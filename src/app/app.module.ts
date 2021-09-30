import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesModule } from './features/courses/courses.module';
import { CourseComponent } from './features/course/course.component';

@NgModule({
  declarations: [AppComponent, CourseComponent],
  imports: [
    SharedModule,
    BrowserModule,
    LoginModule,
    RegistrationModule,
    FontAwesomeModule,
    CoursesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
