import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Module Externo
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// import the new component
import { ResumeComponent } from './resume.component';

//Declaration Rutes
import { ResumeRoutes } from './resumeCT.routing';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfessionalSkillComponent } from './professional-skill/professional-skill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    SlickCarouselModule,
    NgCircleProgressModule,
    RouterModule.forChild(ResumeRoutes)
  ],
  declarations: [
    ResumeComponent,
    EducationComponent,
    ExperienceComponent,
    ProfessionalSkillComponent   
  ]  
})
export class ResumeCTModule { }