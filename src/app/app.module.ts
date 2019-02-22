import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ClickOutsideModule } from 'ng-click-outside';
import { AngularFireDatabaseModule } from '@angular/fire/database';



//Routes
import { Approutes } from './app-routing.module';

//Services
import {LogUpdateService} from './services/log-update.service';

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
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';








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
    AngularFireModule.initializeApp(environment.firebase, 'CV-Angular'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    SweetAlert2Module.forRoot(),

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
  providers: [LogUpdateService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy      
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
