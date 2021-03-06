import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() titleProject;

  public data;
  public recent:Array<any>=[]
  public recentPublish:Array<any>=[]
  // public recent;


  constructor( private router: Router) {
    this.data = JSON.parse(localStorage.getItem('portfoliopage')); 
   }

  ngOnInit() { 
    this.data.projects.filter((element) => {
      if(element.title != this.titleProject){
        this.recent.push(element);   
      }     
    });
    for(let i=0; i<this.recent.length; i++){
      this.recentPublish.push(this.recent[i]);
      if(i == 4){
        break;
      }
    }
  }

  goToCategory(selected){
    this.router.navigate([`/portfolio`]);
    localStorage.setItem('categorySelected', JSON.stringify(selected));      
  }

  goToProject(selected){    
    let title = selected.title.toLowerCase();
    title = title.replace(' ','-');
    title = title.replace(' ','-');      
    // localStorage.setItem('projectSelectedNew', JSON.stringify(selected));  
    localStorage.setItem('projectSelected', JSON.stringify(selected));  
    localStorage.setItem('blog_project', 'true');
    // this.router.navigate([`/portfolio/${title}`]);
    this.router.navigate([`/blog`]);

  }

}
