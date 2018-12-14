import { Component, OnInit, ElementRef } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit { 

  public start: boolean = false;
  public cursor: boolean = true;
  public stringInterpolation: string = "Frontend Developer";
  public stateTyping = 0;

  

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
    // Start after 1 second + 1 second of startDelay
    setTimeout(() => this.start = true, 1000)
  }

  navigationBeggin(duration?:number){
    this.animateScrollService.scrollToElement('begin-home', duration)
  }

  onTypingAnimationComplete () {
    // console.log('#TYPING ANIMATION COMPLETE');  
  
    if(this.stateTyping < 1){
      this.stateTyping++;
    }  
    switch(this.stateTyping){
      case 1: {
        this.stringInterpolation = 'Frontend Developer';  
    
        setTimeout(()=>{
          this.stateTyping++; 
          console.log("Fin del timmer");
          console.log(this.stateTyping);
        
        
        },500); 
             
        
        break;
      }

      case 2: {
        this.stringInterpolation = 'Backend Developer';
        setTimeout(()=>{
          this.stateTyping++; 
          console.log("Fin del timmer");
          console.log(this.stateTyping);
        
        
        },500); 
        break;
      }

      case 3: {
        this.stringInterpolation = 'FullStack Developer';
        setTimeout(()=>{
          this.stateTyping++; 
          console.log("Fin del timmer");
          console.log(this.stateTyping);
        
        
        },500); 

        break;
      }

      case 4: {
        this.stringInterpolation = 'Mobile Developer';
        setTimeout(()=>{
          this.stateTyping = 1; 
          console.log("Fin del timmer");
          console.log(this.stateTyping);
        
        
        },500); 

        break;
      }

      default: this.stateTyping = 1;
    } 
    
  }

}
