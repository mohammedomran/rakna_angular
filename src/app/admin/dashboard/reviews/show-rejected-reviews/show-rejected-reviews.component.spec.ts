import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRejectedReviewsComponent } from './show-rejected-reviews.component';

describe('ShowRejectedReviewsComponent', () => {
  let component: ShowRejectedReviewsComponent;
  let fixture: ComponentFixture<ShowRejectedReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRejectedReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRejectedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
