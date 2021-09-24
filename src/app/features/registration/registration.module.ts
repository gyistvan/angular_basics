import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
