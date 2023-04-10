import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-input-form',
  templateUrl: './payment-input-form.component.html',
  styleUrls: ['./payment-input-form.component.css'],
})
export class PaymentInputFormComponent {
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      cardHolder: ['', Validators.required],
      cardNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
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
