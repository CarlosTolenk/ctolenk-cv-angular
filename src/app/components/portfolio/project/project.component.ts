import { Component, OnInit, DoCheck, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, DoCheck {

  @ViewChild('projectID') 
  private abcd: ElementRef;	

  public data;
  public dataNew;
  public toogleData:boolean = false;
  constructor(private renderer: Renderer2, public elementRef: ElementRef) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('projectSelected'));   
    // localStorage.setItem('projectSelectedNew', JSON.stringify(this.data));   
  }

  ngDoCheck(){
    // this.dataNew = JSON.parse(localStorage.getItem('projectSelectedNew'));    
    // if(this.data.title != this.dataNew.title){
    //   console.log("Entrando a actualizarlo los datos");
    //   this.toogleData = true;     
    //   setTimeout(()=>{
    //     localStorage.setItem('projectSelected', JSON.stringify(this.dataNew));   
    //     this.data = this.dataNew;
    //     this.toogleData = false;      
    //   },100)
    // }  
  }

}
