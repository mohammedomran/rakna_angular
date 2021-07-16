import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOrdersComponent } from './show-all-orders.component';

describe('ShowAllOrdersComponent', () => {
  let component: ShowAllOrdersComponent;
  let fixture: ComponentFixture<ShowAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
