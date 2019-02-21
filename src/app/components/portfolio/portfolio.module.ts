import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Module Extern
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// import the new component
import { PortfolioComponent } from './portfolio.component';
import { ProjectComponent } from './project/project.component';
import { SidebarComponent } from './project/sidebar/sidebar.component';
import { SlideshowComponent } from './project/slideshow/slideshow.component';
import { TechComponent } from './project/tech/tech.component';
import { ReviewComponent } from './project/review/review.component';

//Declaration Rutes
const appRoutes: Routes = [
    { path: 'portfolio', component: PortfolioComponent },  
    { path: 'portfolio/:name' , component: ProjectComponent }
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
    PortfolioComponent,
    ProjectComponent,
    SidebarComponent,
    SlideshowComponent,
    TechComponent,
    ReviewComponent    
  ]
  
})
export class PortfolioModule { }