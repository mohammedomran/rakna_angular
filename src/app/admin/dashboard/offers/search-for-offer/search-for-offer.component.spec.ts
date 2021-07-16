import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForOfferComponent } from './search-for-offer.component';

describe('SearchForOfferComponent', () => {
  let component: SearchForOfferComponent;
  let fixture: ComponentFixture<SearchForOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
