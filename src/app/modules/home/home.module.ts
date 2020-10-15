import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule} from './home-routing.module'; //Added

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule  // Added
  ],
  declarations: []
})
export class HomeModule { }