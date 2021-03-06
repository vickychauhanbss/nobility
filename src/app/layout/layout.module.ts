import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from '../modules/user/login/login.component';
import { RegisterComponent } from '../modules/user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  entryComponents: [LoginComponent, RegisterComponent]//MyModalComponent]

})
export class LayoutModule { }