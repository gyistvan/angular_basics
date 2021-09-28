import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent, PageComponent, ButtonComponent, ModalComponent, InfoComponent } from './components/index';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { timePipe } from './pipes/timePipe';

const components = [HeaderComponent, PageComponent, ButtonComponent, ModalComponent, timePipe, InfoComponent];

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  declarations: components,
  exports: components,
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
