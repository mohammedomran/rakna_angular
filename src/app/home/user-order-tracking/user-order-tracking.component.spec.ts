import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderTrackingComponent } from './user-order-tracking.component';

describe('UserOrderTrackingComponent', () => {
  let component: UserOrderTrackingComponent;
  let fixture: ComponentFixture<UserOrderTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
