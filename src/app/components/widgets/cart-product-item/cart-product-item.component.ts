import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.css'],
})
export class CartProductItemComponent {
  @Input() cartProduct: CartProduct | undefined;
  @Output() addToCartEmitter = new EventEmitter<CartProduct>();
  @Output() removeFromCartEmitter = new EventEmitter<CartProduct>();

  constructor() {}

  addToCart(cartProduct: CartProduct): void {
    this.addToCartEmitter.emit(new CartProduct(cartProduct.product, cartProduct.quantity + 1));
  }

  removeFromCart(cartProduct: CartProduct): void {
    this.removeFromCartEmitter.emit(new CartProduct(cartProduct.product, cartProduct.quantity - 1));
  }
}
