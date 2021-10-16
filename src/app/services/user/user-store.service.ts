import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  public isAdmin$ = this.isAdmin$$.asObservable();

  private name$$ = new BehaviorSubject<string | undefined>('');
  public name$ = this.name$$.asObservable();

  constructor(private userService: UserService) {
    this.getUserFromBE();
  }

  private getUserFromBE(): void {
    this.userService.get().subscribe((user) => {
      this.isAdmin$$.next(user.role === 'admin');
      this.name$$.next(user.name);
    });
  }

  public getMe(): void {
    this.getUserFromBE();
  }

  public removeUserData(): void {
    this.isAdmin$$.next(false);
    this.name$$.next(undefined);
  }
}
