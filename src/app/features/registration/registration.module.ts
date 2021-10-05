import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
