import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    MenuNavComponent,
    SpinnerComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    MenuNavComponent,
    HttpClientModule,
    SpinnerComponent,
    RouterModule,
    FooterComponent,
  ],
})
export class CoreModule {}
