import {Component, OnInit} from '@angular/core';
import {DataInformationService} from '../../services/data-information.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public data;

  constructor(private _dataServices: DataInformationService) {
  }


  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'arrows': false,
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
  };

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
    this.data = JSON.parse(localStorage.getItem('resumepage'));
    console.log(this.data);
  }

}
