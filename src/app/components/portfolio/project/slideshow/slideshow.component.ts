import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  @Input() projectBig;
  @Input() projectSmall
  constructor() {}

  // projectBig = [
  //   {
  //     img: "assets/images/portfolio/portfolio_big1.jpg",
  //     title: 'Contact-us',  
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_big2.jpg",
  //     title: 'Home',  
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_big3.jpg",
  //     title: 'Porftolio',  
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_big4.jpg",
  //     title: 'Contact-us',  
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_big5.jpg",
  //     title: 'About-us',  
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_big6.jpg",
  //     title: 'Section',  
  //   }   
  // ]

  // projectSmall = [
  //   {
  //     img: "assets/images/portfolio/portfolio_small1.jpg", 
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_small2.jpg",   
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_small3.jpg",    
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_small4.jpg",     
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_small5.jpg",     
  //   },
  //   {
  //     img: "assets/images/portfolio/portfolio_small6.jpg",     
  //   }   
  // ]


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

}
