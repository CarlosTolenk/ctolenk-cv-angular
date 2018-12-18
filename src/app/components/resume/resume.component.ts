import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  blockquotes = [
    {text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {text: "Esta aplicación es lo más duro que ha pasado por aqui"}
  ]

  testimonio = [
    {text: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    {text: "2. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {text: "3. Esta aplicación es lo más duro que ha pasado por aqui"},
    {text: "4. Esta aplicación es lo más duro que ha pasado por aqui"},
  ]

  avatars = [
    {
      img: "assets/images/resume_slider1.png",
      name: 'Carlos Tolentino',
      company: 'CTolenk',
      role: 'CEO'      
    },
    {
      img: "assets/images/resume_slider2.png",
      name: 'Nicolas Pineda',
      company: 'Nico Multimedia',
      role: 'CEO'      
    },
    {
      img: "assets/images/resume_slider3.png",
      name: 'Paola Lazala',
      company: 'Lazala Studio',
      role: 'CEO'      
    },
    {
      img: "assets/images/resume_slider4.png",
      name: 'Eliezer Tavárez',
      company: 'Control Diamante',
      role: 'COO'      
    },
  ]

  slideConfig = {
      "slidesToShow": 1, 
      "slidesToScroll": 1,
      "arrows": false,
      'autoplay': true,
      'autoplaySpeed': 3500, 
      'dots': true
    };

    slideConfigTestimonio = {
      'dots': false,
      'slidesToShow': 1,
      'slidesToScroll': 1,
      'arrows': false,
      'fade': true,
      'asNavFor': '.slider-nav'
    }

    slideConfigAvatar = {
      'slidesToShow': 3,
      'slidesToScroll': 1,
      'asNavFor': '.slider-for',
      'dots': false,
      'centerMode': true,
      'focusOnSelect': true,
      'arrows': false,
      'responsive': [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
