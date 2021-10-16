import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private UserStateFacade: UserStateFacade, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.UserStateFacade.isAdmin$.pipe(
      map((state: boolean) => {
        console.log(state);
        return state ? state : this.router.parseUrl('/courses');
      })
    );
  }
}
