import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarouselComponent } from './main-carousel.component';

describe('MainCarouselComponent', () => {
  let component: MainCarouselComponent;
  let fixture: ComponentFixture<MainCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
