import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForOrderComponent } from './search-for-order.component';

describe('SearchForOrderComponent', () => {
  let component: SearchForOrderComponent;
  let fixture: ComponentFixture<SearchForOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
