import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  HeaderComponent,
  PageComponent,
  ButtonComponent,
  ModalComponent,
  InfoComponent,
  SearchComponent,
} from './components/index';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { timePipe } from './pipes/duration.pipe';
import { FormsModule } from '@angular/forms';
import { datePipe } from './pipes/date.pipe';
import { stringJoinerPipe } from './pipes/stringJoiner.pipe';
import { EmailValidatorDirective } from './directives/email-validator/email-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator/password-validator.directive';
import { TogglePasswordDirective } from './directives/toggle-password/toggle-password.directive';
import { LatinCharsValidatorDirective } from './directives/latin-chars-validator/latin-chars-validator.directive';

const components = [
  HeaderComponent,
  PageComponent,
  ButtonComponent,
  ModalComponent,
  InfoComponent,
  SearchComponent,
  timePipe,
  datePipe,
  stringJoinerPipe,
  EmailValidatorDirective,
  PasswordValidatorDirective,
  TogglePasswordDirective,
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  providers: [EmailValidatorDirective, PasswordValidatorDirective, LatinCharsValidatorDirective],
  declarations: components,
  exports: components,
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
