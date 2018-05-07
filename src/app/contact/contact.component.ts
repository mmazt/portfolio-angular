import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactPage') contactPage: ElementRef;
  private nuvemObj = {
    desktop: [
      {
        height: '25px',
        width: '35px',
        top: '5%',
        left: '0%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '15px',
        width: '20px',
        top: '25%',
        left: '20%',
        tipo: 'nuvem_grande'
      },
      {
        height: '5px',
        width: '15px',
        top: '5%',
        left: '25%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '10px',
        width: '35px',
        top: '13%',
        left: '40%',
        tipo: 'nuvem_grande'
      },
      {
        height: '30px',
        width: '25px',
        top: '15%',
        left: '55%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '10px',
        width: '15px',
        top: '3%',
        left: '70%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '20px',
        width: '30px',
        top: '15%',
        left: '90%',
        tipo: 'nuvem_grande'
      },
      {
        height: '40px',
        width: '30px',
        top: '1%',
        left: '110%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '20px',
        width: '30px',
        top: '13%',
        left: '130%',
        tipo: 'nuvem_pequena'
      }
    ],
    mobile: [
      {
        height: '30px',
        width: '25px',
        top: '15%',
        left: '0%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '10px',
        width: '15px',
        top: '3%',
        left: '65%',
        tipo: 'nuvem_pequena'
      },
      {
        height: '20px',
        width: '30px',
        top: '15%',
        left: '120%',
        tipo: 'nuvem_grande'
      }
    ]
  };
  public nuvens = [];
  public windowSize: { height: string; width: string };
  constructor() {
    this.windowSize = {
      height: window.screen.availHeight + 'px',
      width: window.screen.availWidth + 'px'
    };
    if (window.innerWidth >= 480) {
      this.nuvens = this.nuvemObj.desktop;
    } else {
      this.nuvens = this.nuvemObj.mobile;
    }
  }

  ngOnInit() {}
}
