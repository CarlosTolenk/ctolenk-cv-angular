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
  public easeToggle:boolean = true;
  public classAnimated:string = 'zoomInUp';

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
    this.easeToggle=false;
    if(filter == 'ALL'){
      this.filterData = this.data.projects;
    }else{
      this.filterData = this.data.projects.filter(word => word.category == filter)
    }
    this.selected = filter;  
 
    this.onEffect();
  
  }

  onEffect(){
    let selectedAnimate = Math.floor(Math.random() * 10) + 1 ;

    switch(selectedAnimate){
      case 1: this.classAnimated = 'fadeInDown'; break;
      case 2: this.classAnimated = 'fadeInLeft'; break;
      case 3: this.classAnimated = 'bounceIn'; break;
      case 4: this.classAnimated = 'rotateInDownLeft'; break;
      case 5: this.classAnimated = 'flipInY'; break;
      case 6: this.classAnimated = 'bounceInUp'; break;
      case 7: this.classAnimated = 'slideInUp'; break;
      case 8: this.classAnimated = 'slideInLeft'; break;
      case 9: this.classAnimated = 'zoomInRight'; break;
      case 10: this.classAnimated = 'jackInTheBox'; break;
    }
    console.log(this.classAnimated);




    setInterval(()=>{
      this.easeToggle=true;     
    }, 0)

  
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
