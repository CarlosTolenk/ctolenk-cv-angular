import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


//Routes
import { Approutes } from './app-routing.module';

//Componentes Raiz
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';


// Import your library
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Import Module
// import { HomeModule } from './components/home/home.module';
// import { PortfolioModule } from './components/portfolio/portfolio.module';
// import { ResumeCTModule } from './components/resume/resumeCT.module';
// import { BlogModule } from './components/blog/blog.module';
// import { ContactUsModule } from './components/contact-us/contact-us.module';
import { ClickOutsideModule } from 'ng-click-outside';




@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
    FooterComponent, 
    NotFoundComponent,
    LayoutComponent,  
   
  ],
  imports: [
    CommonModule,  
    BrowserModule,
    FormsModule,
    HttpClientModule,  
    ClickOutsideModule,
    RouterModule.forRoot(Approutes,  {scrollPositionRestoration: 'enabled',  useHash:false}),
 

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
    SlickCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // TypingAnimationModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
