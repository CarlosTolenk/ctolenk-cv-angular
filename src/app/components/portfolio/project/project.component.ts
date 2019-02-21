import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public data;

  constructor() { 
    this.data = JSON.parse(localStorage.getItem('projectSelected'));     
  }

  ngOnInit() {
  }

}
