import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuvensComponent } from './nuvens.component';

describe('NuvensComponent', () => {
  let component: NuvensComponent;
  let fixture: ComponentFixture<NuvensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuvensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuvensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
