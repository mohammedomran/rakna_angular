import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnderDeliveryOrdersComponent } from './show-under-delivery-orders.component';

describe('ShowUnderDeliveryOrdersComponent', () => {
  let component: ShowUnderDeliveryOrdersComponent;
  let fixture: ComponentFixture<ShowUnderDeliveryOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUnderDeliveryOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnderDeliveryOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
