import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public selectedMenu:string;
  public toogle:boolean = false;

  constructor() { 
    this.selectedMenu = "toggle_icon";
  }

 

  ngOnInit() {
  }

  toogleMenu(){  
    if(this.toogle){ 
      this.toogle = !this.toogle;      
    }else{   
      this.toogle = !this.toogle;   
    }
    console.log(this.toogle);   
  
    
  }

 

}
