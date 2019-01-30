import { Component, OnInit } from '@angular/core';
import { DataInformationService } from '../../services/data-information.service';
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

  constructor(private _dataServices: DataInformationService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('portfoliopage'));    
    this.filterData = this.data.projects;
    this.selected = 'ALL'
  }

  onChangeFilter(filter){
    if(filter == 'ALL'){
      this.filterData = this.data.projects;
    }else{
      this.filterData = this.data.projects.filter(word => word.category == filter)
    }

    this.selected = filter;
    
  }
  

}
