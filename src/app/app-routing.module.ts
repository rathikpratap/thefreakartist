import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {OrderComponent} from './order/order.component'
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'term',
    component: TermsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
