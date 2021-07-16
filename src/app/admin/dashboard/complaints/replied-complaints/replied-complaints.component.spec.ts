import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliedComplaintsComponent } from './replied-complaints.component';

describe('RepliedComplaintsComponent', () => {
  let component: RepliedComplaintsComponent;
  let fixture: ComponentFixture<RepliedComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepliedComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
