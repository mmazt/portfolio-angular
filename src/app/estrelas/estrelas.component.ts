import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.css']
})
export class EstrelasComponent implements OnInit {
  @Input('coordinates') coordinates;
  constructor() {}

  ngOnInit() {
    console.log(this.coordinates);
  }
}
