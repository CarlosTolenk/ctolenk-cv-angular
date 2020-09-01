import {Component, OnInit} from '@angular/core';

//Services
import {DataInformationService} from '../../services/data-information.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataInformationService],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public year;
  public data;

  constructor(private _dataServices: DataInformationService) {
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('homepage'));
  }


}
