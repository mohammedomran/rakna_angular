import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOffersComponent } from './show-all-offers.component';

describe('ShowAllOffersComponent', () => {
  let component: ShowAllOffersComponent;
  let fixture: ComponentFixture<ShowAllOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
