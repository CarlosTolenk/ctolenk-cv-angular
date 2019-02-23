import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.scss']
})
export class ConstruccionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    let isTraslateProject = localStorage.getItem('blog_project');
    if( isTraslateProject === 'true'){
      localStorage.setItem('blog_project', 'false');
      let project = JSON.parse(localStorage.getItem('projectSelected'));    
      let title = project.title.toLowerCase();
      title = title.replace(' ','-');
      title = title.replace(' ','-');  
      this.router.navigate([`/portfolio/${title}`]);  
    }

  }

}
