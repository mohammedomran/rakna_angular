import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcceptedReviewsComponent } from './show-accepted-reviews.component';

describe('ShowAcceptedReviewsComponent', () => {
  let component: ShowAcceptedReviewsComponent;
  let fixture: ComponentFixture<ShowAcceptedReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAcceptedReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAcceptedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
