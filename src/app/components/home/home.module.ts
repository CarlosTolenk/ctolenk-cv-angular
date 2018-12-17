
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


// import the new component
import { HomeComponent } from './home.component';
import { BannerComponent } from '../banner/banner.component';
import { TypingAnimationModule } from 'angular-typing-animation'

//import rutas
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypingAnimationModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    BannerComponent   
  ]

  
})
export class HomeModule { }


