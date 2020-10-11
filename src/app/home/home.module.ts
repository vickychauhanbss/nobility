import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../banner/banner.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, BannerComponent]
})
export class HomeModule { }