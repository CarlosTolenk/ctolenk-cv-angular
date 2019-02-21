import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  @Input() technology;
  @Input() settings;
  @Input() descriptions;
  @Input() urlProject;
  @Input() duration;

  constructor() { }

  ngOnInit() { }

}
