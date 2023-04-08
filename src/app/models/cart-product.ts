import { Product } from './product';

export class CartProduct {
  constructor(readonly product: Product, readonly quantity: number = 0) {}

  increateQuantity(): CartProduct {
    return new CartProduct(this.product, this.quantity + 1);
  }

  decreaseQuantity(): CartProduct {
    return new CartProduct(this.product, this.quantity - 1);
  }
}
