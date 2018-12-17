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
    ProjectComponent    
  ]
  
})
export class PortfolioModule { }