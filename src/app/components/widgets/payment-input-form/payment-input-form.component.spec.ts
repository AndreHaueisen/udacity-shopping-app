import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInputFormComponent } from './payment-input-form.component';

describe('PaymentInputFormComponent', () => {
  let component: PaymentInputFormComponent;
  let fixture: ComponentFixture<PaymentInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentInputFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
