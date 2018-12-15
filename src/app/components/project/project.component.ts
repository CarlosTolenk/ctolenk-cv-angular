import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  blockquotes = [
    {
      text: "1.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      company: 'Google Inc',
      name: 'Carlos Tolentino',
      date: '4th July 2017'
    },
    {
      text: "2.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      company: 'Facebook Inc',
      name: 'Raul Castro',
      date: '5th July 2017'
    },
    {
      text: "3.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: 'Steph Fadul',
      company: 'Google Inc',
      date: '6th July 2017'
    },
    {
      text: "4.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      company: 'Google Inc',
      name: 'Nethan Jone',
      date: '7th July 2017'
    },
   
  ]

  projectBig = [
    {
      img: "assets/images/portfolio/portfolio_big1.jpg",
      title: 'Contact-us',  
    },
    {
      img: "assets/images/portfolio/portfolio_big2.jpg",
      title: 'Home',  
    },
    {
      img: "assets/images/portfolio/portfolio_big3.jpg",
      title: 'Porftolio',  
    },
    {
      img: "assets/images/portfolio/portfolio_big4.jpg",
      title: 'Contact-us',  
    },
    {
      img: "assets/images/portfolio/portfolio_big5.jpg",
      title: 'About-us',  
    },
    {
      img: "assets/images/portfolio/portfolio_big6.jpg",
      title: 'Section',  
    }   
  ]

  projectSmall = [
    {
      img: "assets/images/portfolio/portfolio_small1.jpg", 
    },
    {
      img: "assets/images/portfolio/portfolio_small2.jpg",   
    },
    {
      img: "assets/images/portfolio/portfolio_small3.jpg",    
    },
    {
      img: "assets/images/portfolio/portfolio_small4.jpg",     
    },
    {
      img: "assets/images/portfolio/portfolio_small5.jpg",     
    },
    {
      img: "assets/images/portfolio/portfolio_small6.jpg",     
    }   
  ]


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
          slidesToScroll: 3,
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
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
 
  };

  ngOnInit() {
  }

}
