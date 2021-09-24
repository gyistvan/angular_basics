import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [HeaderComponent, PageComponent],
  exports: [CommonModule, HeaderComponent, PageComponent],
})
export class SharedModule {}
