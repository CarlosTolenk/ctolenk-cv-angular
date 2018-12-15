import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent }  from './components/resume/resume.component';
import { PortfolioComponent } from  './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component'; 
import { ProjectComponent } from './components/project/project.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';


const routes: Routes = [

  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'resume' , component: ResumeComponent },
  { path: 'portfolio' , component: PortfolioComponent },
  { path: 'portfolio/:name' , component: ProjectComponent },
  { path: 'blog' , component: BlogComponent },
  { path: 'blog/:name' , component: BlogDetailComponent },
  { path: 'contact-us' , component: ContactUsComponent },
  { path: 'not-found' , component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
