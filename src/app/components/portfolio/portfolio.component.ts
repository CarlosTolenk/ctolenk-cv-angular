import { Component, OnInit } from '@angular/core';
import { DataInformationService } from '../../services/data-information.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public data;
  public filterData;
  public selected:String
  public projectSeleted;

  constructor(
    private _dataServices: DataInformationService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
   
     }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('portfoliopage'));    
    this.filterData = this.data.projects;      

    // if(localStorage.getItem('categorySelected')){
    //   this.selected = localStorage.getItem('categorySelected');
    //   console.log(this.selected);      
    // }else{
       this.selected = 'ALL';  
    //    console.log(this.selected);
    // }   

    // this.onChangeFilter(this.selected);
  }

  onChangeFilter(filter){
    if(filter == 'ALL'){
      this.filterData = this.data.projects;
    }else{
      this.filterData = this.data.projects.filter(word => word.category == filter)
    }
    this.selected = filter;    
  }

  onChangeSelected(target){
    this.projectSeleted = target;
    console.log(this.projectSeleted);
  }

  goToProject(item){   
    console.log(item.title);
    let title = item.title.toLowerCase();
    title = title.replace(' ','-');
    title = title.replace(' ','-');
    this.router.navigate([`/portfolio/${title}`]);
    localStorage.setItem('projectSelected', JSON.stringify(item));      
  }
  

}
