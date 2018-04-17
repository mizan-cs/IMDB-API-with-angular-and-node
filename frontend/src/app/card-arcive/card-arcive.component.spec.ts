import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArciveComponent } from './card-arcive.component';

describe('CardArciveComponent', () => {
  let component: CardArciveComponent;
  let fixture: ComponentFixture<CardArciveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardArciveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
