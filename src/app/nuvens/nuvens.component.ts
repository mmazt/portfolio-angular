import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nuvens',
  templateUrl: './nuvens.component.html',
  styleUrls: ['./nuvens.component.scss']
})
export class NuvensComponent implements OnInit {
  @Input('coordinates') coordinates;
  @Input('tipo') tipo;
  constructor() {}

  ngOnInit() {}
}
