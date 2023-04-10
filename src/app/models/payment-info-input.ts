export class PaymentInfoInput {
  constructor(readonly cardNumber: string, readonly cardHolder: string, readonly address: string) {}
}
