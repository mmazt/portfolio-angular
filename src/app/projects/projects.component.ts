import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stackList' })
export class StackList implements PipeTransform {
  transform(value: any): any {
    let result = '';
    for (const item of value) {
      result +=
        '<strong>' + item.title + ':</strong> ' + item.description + '<br />';
    }
    return result;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
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
    },
    {
      id: 'ACRUXX',
      img: 'acruxx1.png',
      url: 'http://www.acruxx.com.br'
    }
  ];
  public selectedProject: { id: string; img?: string; url?: string };
  public windowSize;
  constructor() {
    this.windowSize = {
      height: window.innerHeight + 'px',
      width: window.innerWidth + 'px'
    };
    this.selectedProject = this.list[0];
  }

  ngOnInit() {}

  changeProject(id) {
    this.selectedProject = this.list.filter(item => {
      return item.id === id;
    })[0];
    console.log(id, this.selectedProject.id);
  }
}
