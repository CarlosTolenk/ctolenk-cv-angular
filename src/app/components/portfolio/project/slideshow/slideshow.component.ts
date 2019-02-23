import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() projectBig;
  @Input() projectSmall;

  public toggleSlide:boolean = true;
  public dataNew;

  constructor() {}

  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "arrows": false,
    'autoplay': true,
    'autoplaySpeed': 3500, 
    'dots': true
  };

  slideConfigProject = {
    'dots': false,
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': true,
    'fade': true,
    'asNavFor': '.slider-nav',
    'infite': true,
    'autoplay': true 
  }

  slideConfigProjectAvatar = {
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'asNavFor': '.slider-for',
    'dots': false,
    'centerMode': true,
    'focusOnSelect': true,
    'arrows': true,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          infinite: true,
        }
      }
    ]
 
  };

  ngOnInit() {
  }

  deleteSlide(){
    this.toggleSlide = !this.toggleSlide;
  }



}
