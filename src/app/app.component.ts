import {Component, OnInit} from '@angular/core';
import {DataInformationService} from './services/data-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CTolenk';
  isLoading: boolean;

  constructor(private _dataServices: DataInformationService) {
    this.isLoading = false;
  }

  ngOnInit() {
    this._dataServices.initData().subscribe((isReady) => {
      if (isReady) {
        const data = JSON.parse(localStorage.getItem('homepage'));
        if (data) {
          console.log('Debe estar en el Local Storage');
          this.isLoading = true;
        }
      }
    });
  }

}
