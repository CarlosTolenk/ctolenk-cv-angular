import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Module Extern
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// import the new component
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ConstruccionComponent } from '../construccion/construccion.component';

//Declaration Rutes
const appRoutes: Routes = [
    // { path: 'blog', component: BlogComponent },  
    { path: 'blog', component: ConstruccionComponent },      
    { path: 'blog/:name' , component: BlogDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCircleProgressModule,
    SlickCarouselModule,
    RouterModule.forChild(appRoutes),
   
  ],
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    ConstruccionComponent    
  ]
  
})
export class BlogModule { }