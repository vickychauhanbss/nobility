import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeCommanComponent } from './home.component';
import { BannerComponent } from '../../banner/banner.component';
import { AboutComponent } from '../home/about/about.component';
import { BlogComponent } from '../home/blog/blog.component';
import { ContactComponent } from '../home/contact/contact.component';
import { FaqComponent } from '../home/faq/faq.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeCommanComponent,
    children: [
      // { path: ':id/detail', component: ProductDetailComponent },
      { path:'', component: HomeComponent },
      { path:'about', component: AboutComponent },
      { path:'blog', component: BlogComponent },
      { path:'contact', component: ContactComponent },
      { path:'faq', component: FaqComponent }

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [HomeCommanComponent ,HomeComponent, BannerComponent, AboutComponent, BlogComponent, ContactComponent, FaqComponent]
})
export class HomeRoutingModule { }