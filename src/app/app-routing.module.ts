import { Routes } from '@angular/router';

// Components
import { NotFoundComponent } from './components/not-found/not-found.component'; 
import { LayoutComponent } from './components/layout/layout.component';


export const Approutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[          
      { path: '', loadChildren: './components/home/home.module#HomeModule'},
      { path: '', loadChildren: './components/resume/resumeCT.module#ResumeCTModule'},
      { path: '', loadChildren: './components/portfolio/portfolio.module#PortfolioModule'},
      { path: '', loadChildren: './components/blog/blog.module#BlogModule'},
      { path: '', loadChildren: './components/contact-us/contact-us.module#ContactUsModule'},
    
    ] 
  },
  
  { path: '**', component: NotFoundComponent }
  
];
