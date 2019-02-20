import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professional-skill',
  templateUrl: './professional-skill.component.html',
  styleUrls: ['./professional-skill.component.scss']
})
export class ProfessionalSkillComponent implements OnInit {

  @Input() skills;

  constructor() { }

  ngOnInit() {
  }

}
