import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import the new component
import { ContactUsComponent } from './contact-us.component';


//Declaration Rutes
const appRoutes: Routes = [
    { path: 'contact-ctolenk', component: ContactUsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(appRoutes)   
  ],
  declarations: [
    ContactUsComponent    
  ]  
})
export class ContactUsModule { }