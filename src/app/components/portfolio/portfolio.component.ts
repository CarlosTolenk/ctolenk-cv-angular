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

  constructor(private _dataServices: DataInformationService) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('portfoliopage'));    
    console.log(this.data.projects);
  }
  

}
