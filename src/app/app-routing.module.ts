import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [NotAuthorizedGuard],
    loadChildren: (): Promise<any> => import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    canActivate: [NotAuthorizedGuard],
    loadChildren: (): Promise<any> =>
      import('./features/registration/registration.module').then((m) => m.RegistrationModule),
  },
  {
    path: 'courses',
    canLoad: [AuthorizedGuard],
    loadChildren: (): Promise<any> => import('./features/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'course',
    canLoad: [AuthorizedGuard],
    loadChildren: (): Promise<any> => import('./features/course/course.module').then((m) => m.CourseModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
