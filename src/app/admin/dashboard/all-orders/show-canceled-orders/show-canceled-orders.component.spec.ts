import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCanceledOrdersComponent } from './show-canceled-orders.component';

describe('ShowCanceledOrdersComponent', () => {
  let component: ShowCanceledOrdersComponent;
  let fixture: ComponentFixture<ShowCanceledOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCanceledOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCanceledOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
