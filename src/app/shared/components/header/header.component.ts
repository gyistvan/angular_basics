import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { UserStoreService } from 'src/app/services/user/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public userName?: string;

  constructor(private router: Router, private authService: AuthService, private userStoreService: UserStoreService) {}

  ngOnInit(): void {
    this.userStoreService.name$.subscribe((name) => {
      this.userName = name;
    });
  }

  public logoutAndRedirect(): void {
    this.authService.logout().subscribe(() => {
      this.redirectToLoginPage();
    });
  }

  public redirectToLoginPage(): void {
    this.router.navigate(['/login']);
  }
}
