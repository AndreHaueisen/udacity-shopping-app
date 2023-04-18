import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-input-form',
  templateUrl: './payment-input-form.component.html',
  styleUrls: ['./payment-input-form.component.css'],
})
export class PaymentInputFormComponent {
  cardHolder: string = '';
  cardNumber: string = '';
  address: string = '';

  constructor(private router: Router) {}

  onInputChange(field: string, ngModel: any) {
    if (field === 'cardHolder') {
      this.cardHolder = ngModel.value;
    } else if (field === 'cardNumber') {
      this.cardNumber = ngModel.value;
    } else if (field === 'address') {
      this.address = ngModel.value;
    }
  }

  onSubmit(cardHolderRef: any, cardNumberRef: any, addressRef: any) {
    if (cardHolderRef.valid && cardNumberRef.valid && addressRef.valid) {
      this.router.navigate(['/purchase-success']);
    }
  }
}
