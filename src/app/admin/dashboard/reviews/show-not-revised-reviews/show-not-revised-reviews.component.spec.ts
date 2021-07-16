import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotRevisedReviewsComponent } from './show-not-revised-reviews.component';

describe('ShowNotRevisedReviewsComponent', () => {
  let component: ShowNotRevisedReviewsComponent;
  let fixture: ComponentFixture<ShowNotRevisedReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNotRevisedReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNotRevisedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
