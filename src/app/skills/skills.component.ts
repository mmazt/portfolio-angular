import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public windowSize: { height: string; width: string };
  public skillList = {
    dev: [
      { percent: 98, legend: '1', image: 'html' },
      { percent: 90, legend: '2', image: 'css3' },
      { percent: 90, legend: '3', image: 'javascript' },
      { percent: 85, legend: '4', image: 'angular' },
      { percent: 75, legend: '5', image: 'ionic' },
      { percent: 70, legend: '6', image: 'rxjs' },
      { percent: 85, legend: '7', image: 'react' },
      { percent: 80, legend: '8', image: 'redux' },
      { percent: 70, legend: '9', image: 'react_native' },
      { percent: 60, legend: '10', image: 'nodejs' },
      { percent: 70, legend: '11', image: 'wordpress' },
      { percent: 90, legend: '12', image: 'restful' }
    ],
    infra: [
      { percent: 65, legend: '13', image: 'docker' },
      { percent: 65, legend: '14', image: 'jenkins' }
    ],
    design: [
      { percent: 90, legend: '15', image: 'bootstrap' },
      { percent: 70, legend: '16', image: 'photoshop' },
      { percent: 65, legend: '17', image: 'illustrator' },
      { percent: 80, legend: '18', image: 'responsivo' },
      { percent: 70, legend: '19', image: 'ux' }
    ]
  };

  constructor() {
    this.windowSize = {
      height: window.screen.availHeight + 'px',
      width: window.screen.availWidth + 'px'
    };
  }
  ngOnInit() {}
}
