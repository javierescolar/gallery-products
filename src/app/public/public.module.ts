import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './ui/home/home.component';
import { CarrouselComponent } from './ui/home/carrousel/carrousel.component';

@NgModule({
  declarations: [HomeComponent, CarrouselComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
