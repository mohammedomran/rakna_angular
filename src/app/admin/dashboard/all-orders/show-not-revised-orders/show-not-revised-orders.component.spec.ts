import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotRevisedOrdersComponent } from './show-not-revised-orders.component';

describe('ShowNotRevisedOrdersComponent', () => {
  let component: ShowNotRevisedOrdersComponent;
  let fixture: ComponentFixture<ShowNotRevisedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNotRevisedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNotRevisedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
