import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public estrelas = [];
  public windowSize = {};
  constructor() {}

  ngOnInit() {
    this.estrelas = this.criarEstrelas(50);
    this.windowSize = {
      height: window.innerHeight + 'px',
      width: window.innerWidth + 'px'
    };
  }
  // Função para gerar números aleatórios
  randomIntBetween(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  // Função para criar estrelas
  criarEstrelas(count) {
    const w = window.innerWidth;
    const h = window.innerHeight * 0.42;

    const arr = new Array(count).fill(undefined).map(item => {
      return {
        height: this.randomIntBetween(1, 10) + 'px',
        width: this.randomIntBetween(1, 10) + 'px',
        top:
          Math.min(
            this.randomIntBetween(1, h),
            h - this.randomIntBetween(1, 10) - 5
          ) + 'px',
        left:
          Math.min(
            this.randomIntBetween(1, w),
            w - this.randomIntBetween(1, 10) - 5
          ) + 'px'
      };
    });
    return arr;
  }
}
