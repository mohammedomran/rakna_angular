import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsLoginComponent } from './editors-login.component';

describe('EditorsLoginComponent', () => {
  let component: EditorsLoginComponent;
  let fixture: ComponentFixture<EditorsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
