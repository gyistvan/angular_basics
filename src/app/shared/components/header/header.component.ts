import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStateFacade } from 'src/app/store/auth/auth.facade';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName$: Observable<string | undefined> = this.userStateFacade.userName$;

  constructor(private authFacade: AuthStateFacade, private userStateFacade: UserStateFacade) {}

  ngOnInit(): void {
    this.authFacade.isUserAuthorized$.subscribe(
      (isUserAuthorized) => isUserAuthorized && this.userStateFacade.getCurrentUser()
    );
  }

  public logoutAndRedirect(): void {
    this.authFacade.logout();
  }
}
