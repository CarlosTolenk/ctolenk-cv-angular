import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() blockquotes;

  constructor() { }

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "arrows": false,
    'autoplay': true,
    'autoplaySpeed': 3500, 
    'dots': true
  }; 

  ngOnInit() {
  }

}
