import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, CommonModule, FormsModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
