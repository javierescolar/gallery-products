import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, MenuNavComponent, SpinnerComponent],
  exports: [
    NavbarComponent,
    MenuNavComponent,
    HttpClientModule,
    SpinnerComponent,
  ],
})
export class CoreModule {}
