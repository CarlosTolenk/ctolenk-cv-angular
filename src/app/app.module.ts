import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TypingAnimationDirective } from 'angular-typing-animation';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BannerComponent } from './components/banner/banner.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { ProjectComponent } from './components/project/project.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    TypingAnimationDirective,
    BannerComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactUsComponent,
    NotFoundComponent,
    CarouselComponent,
    ProjectComponent,
    BlogDetailComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 600,      
    }),
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
