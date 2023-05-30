import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MainPageComponent,
    SocialMediaComponent,
    ReviewsComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    OrderComponent,
    FooterComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

