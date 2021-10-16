import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from './services/session-storage/session-storage.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [Window, SessionStorageService, AuthService],
})
export class AuthModule {}
