import {Component, OnInit} from '@angular/core';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

// @HostListener('window:resize', ['$event'])
export class MenuComponent implements OnInit {

  public selectedMenu: string;
  public toogle: boolean = false;
  public screenHeight: any;
  public screenWidth: any;

  constructor() {
    this.selectedMenu = 'toggle_icon';
  }

  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //       this.screenHeight = window.innerHeight;
  //       this.screenWidth = window.innerWidth;
  // }

  ngOnInit() {
    console.log(this.screenWidth);
  }

  toogleMenu() {
    if (this.toogle) {
      this.toogle = !this.toogle;
    } else {
      this.toogle = !this.toogle;
    }
    console.log(this.toogle);


  }

  onClickedOutside(e: Event) {
    if (this.toogle) {
      this.toogle = !this.toogle;
    }
  }


}
