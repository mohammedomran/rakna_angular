import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeliveredOrdersComponent } from './show-delivered-orders.component';

describe('ShowDeliveredOrdersComponent', () => {
  let component: ShowDeliveredOrdersComponent;
  let fixture: ComponentFixture<ShowDeliveredOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDeliveredOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeliveredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
