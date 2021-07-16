import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllReviewsComponent } from './show-all-reviews.component';

describe('ShowAllReviewsComponent', () => {
  let component: ShowAllReviewsComponent;
  let fixture: ComponentFixture<ShowAllReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
