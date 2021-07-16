import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRevisedComplaintsComponent } from './not-revised-complaints.component';

describe('NotRevisedComplaintsComponent', () => {
  let component: NotRevisedComplaintsComponent;
  let fixture: ComponentFixture<NotRevisedComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotRevisedComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRevisedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
