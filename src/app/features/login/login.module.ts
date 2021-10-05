import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
