import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedComplaintsComponent } from './revised-complaints.component';

describe('RevisedComplaintsComponent', () => {
  let component: RevisedComplaintsComponent;
  let fixture: ComponentFixture<RevisedComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
