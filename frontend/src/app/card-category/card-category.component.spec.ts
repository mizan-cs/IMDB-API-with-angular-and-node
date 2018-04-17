import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCategoryComponent } from './card-category.component';

describe('CardCategoryComponent', () => {
  let component: CardCategoryComponent;
  let fixture: ComponentFixture<CardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
