import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactPage') contactPage: ElementRef;
  public nuvens_1 = [];
  public nuvens_2 = [];
  public nuvens_3 = [];
  private windowSize = {};
  constructor() {
    this.windowSize = {
      height: window.innerHeight + 'px',
      width: window.innerWidth + 'px'
    };
  }

  ngOnInit() {
    this.nuvens_1 = this.criarNuvens(1, 1, 0);
    this.nuvens_2 = this.criarNuvens(1, 0, 1);
    this.nuvens_3 = this.criarNuvens(1, 2, 1);
    console.log(this.contactPage);
  }
  // Função para gerar números aleatórios
  randomIntBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  // Função para criar estrelas
  criarNuvens(count, side, pos) {
    const arr = new Array(count).fill(undefined).map(item => {
      return {
        height:
          pos === 0
            ? this.randomIntBetween(5, 20) + 'px'
            : this.randomIntBetween(20, 40) + 'px',
        width:
          side === 1
            ? this.randomIntBetween(5, 20) + 'px'
            : this.randomIntBetween(20, 30) + 'px',
        top:
          pos === 0
            ? this.randomIntBetween(1, 5) + '%'
            : this.randomIntBetween(5, 10) + '%',
        left:
          side === 0
            ? this.randomIntBetween(-20, 20) + '%'
            : side === 1
              ? this.randomIntBetween(20, 70) + '%'
              : this.randomIntBetween(70, 120) + '%'
      };
    });
    return arr;
  }
}
