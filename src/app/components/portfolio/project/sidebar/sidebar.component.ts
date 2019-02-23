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


  constructor( private router: Router,) {
    this.data = JSON.parse(localStorage.getItem('portfoliopage')); 
   }

  ngOnInit() { 
    console.log("Iniciando el sidebar");
    this.data.projects.filter((element) => {
      if(element.title != this.titleProject){
        this.recent.push(element);
        console.log(this.recent);
      }     
    });
    for(let i=0; i<this.recent.length; i++){
      this.recentPublish.push(this.recent[i]);
      if(i == 3){
        break;
      }
    }
  }

  goToCategory(selected){
    this.router.navigate([`/portfolio`]);
    localStorage.setItem('categorySelected', JSON.stringify(selected));      
  }

}
