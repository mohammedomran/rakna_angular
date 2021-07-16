import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForComplaintComponent } from './search-for-complaint.component';

describe('SearchForComplaintComponent', () => {
  let component: SearchForComplaintComponent;
  let fixture: ComponentFixture<SearchForComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
