import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSuggestionsComponent } from './send-suggestions.component';

describe('SendSuggestionsComponent', () => {
  let component: SendSuggestionsComponent;
  let fixture: ComponentFixture<SendSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
