import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForProductComponent } from './search-for-product.component';

describe('SearchForProductComponent', () => {
  let component: SearchForProductComponent;
  let fixture: ComponentFixture<SearchForProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
