import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSetupAccountComponent } from './vendor-setup-account.component';

describe('VendorSetupAccountComponent', () => {
  let component: VendorSetupAccountComponent;
  let fixture: ComponentFixture<VendorSetupAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSetupAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSetupAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
