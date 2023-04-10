import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentInfoInput } from 'src/app/models/payment-info-input';



@Component({
  selector: 'app-payment-input-form',
  templateUrl: './payment-input-form.component.html',
  styleUrls: ['./payment-input-form.component.css'],
})
export class PaymentInputFormComponent {
  inputForm: FormGroup;
  paymentInfoForm = new PaymentInfoInput('', '', '');

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.record(this.paymentInfoForm);
  }

  get cardHolder(): AbstractControl | null{
    return this.inputForm.get('cardHolder');
  }

  get cardNumber(): AbstractControl | null{
    return this.inputForm.get('cardNumber');
  }


  get address(): AbstractControl | null{
    return this.inputForm.get('address');
  }

  onSubmit() {
    if (this.inputForm.valid) {
      console.log('Form submitted successfully', this.inputForm.value);
    }
  }
}
