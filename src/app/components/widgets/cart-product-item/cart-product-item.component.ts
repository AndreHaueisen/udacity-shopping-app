import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

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

  addToCart(): void {
    this.addToCartEmitter.emit(this.cartProduct);
  }

  removeFromCart(): void {
    this.removeFromCartEmitter.emit(this.cartProduct);
  }
}
