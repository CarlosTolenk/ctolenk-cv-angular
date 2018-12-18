import { Routes } from '@angular/router';

//components
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent      
      }   
    ]
  },
  // {
  //   path: '', component: HomeComponent
  // }
];
