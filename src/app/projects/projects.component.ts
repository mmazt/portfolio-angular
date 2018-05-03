import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public list = [
    {
      id: 'POPSCIENCE',
      img: 'popscience1.jpg',
      url: 'http://www.popscience.com.br'
    },
    {
      id: 'OKNOTOKAY',
      img: 'oknotokay1.jpg',
      url: 'http://www.oknotokay.com'
    },
    {
      id: 'PINEAPPLE',
      img: 'pineapple1.jpg',
      url: 'http://www.pineappleacessorios.com.br'
    }
  ];
  public windowSize;
  constructor() {
    this.windowSize = {
      height: window.innerHeight + 'px',
      width: window.innerWidth + 'px'
    };
  }

  ngOnInit() {}
}
