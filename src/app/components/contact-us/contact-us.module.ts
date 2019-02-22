import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import the new component
import { ContactUsComponent } from './contact-us.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


//Declaration Rutes
const appRoutes: Routes = [
    { path: 'contact-ctolenk', component: ContactUsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(appRoutes),
    SweetAlert2Module.forRoot()   
  ],
  declarations: [
    ContactUsComponent    
  ]  
})
export class ContactUsModule { }