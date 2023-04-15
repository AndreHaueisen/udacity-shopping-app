import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-input-form',
  templateUrl: './payment-input-form.component.html',
  styleUrls: ['./payment-input-form.component.css'],
})
export class PaymentInputFormComponent {
  inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.inputForm = this.formBuilder.group({
      cardHolder: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      cardNumber: [
        '',
        [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]*')],
      ],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
    });
  }

  get cardHolder(): AbstractControl | null {
    return this.inputForm.get('cardHolder');
  }

  get cardNumber(): AbstractControl | null {
    return this.inputForm.get('cardNumber');
  }

  get address(): AbstractControl | null {
    return this.inputForm.get('address');
  }

  onSubmit() {
    if (this.inputForm.valid) {
      this.router.navigate(['/purchase-success']);
    }
  }
}
