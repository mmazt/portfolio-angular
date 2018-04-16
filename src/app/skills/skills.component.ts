import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public windowSize;
  constructor() {
    this.windowSize = {
      height: window.innerHeight + 'px',
      width: window.innerWidth + 'px'
    };
  }

  ngOnInit() {}
}
