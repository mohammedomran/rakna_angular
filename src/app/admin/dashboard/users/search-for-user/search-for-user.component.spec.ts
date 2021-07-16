import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForUserComponent } from './search-for-user.component';

describe('SearchForUserComponent', () => {
  let component: SearchForUserComponent;
  let fixture: ComponentFixture<SearchForUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
