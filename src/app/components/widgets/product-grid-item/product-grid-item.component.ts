import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from 'src/app/models/cart-product';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css'],
})
export class ProductGridItemComponent {
  @Input() product: Product | undefined;
  @Output() addToCartEmitter = new EventEmitter<CartProduct>();
  @Output() removeFromCartEmitter = new EventEmitter<CartProduct>();
  quantity: number = 0;

  constructor() {}

  addToCart(product: Product): void {
    this.quantity += 1;
    this.addToCartEmitter.emit(new CartProduct(product, this.quantity));
  }

  removeFromCart(product: Product): void {
    this.quantity -= 1;
    this.removeFromCartEmitter.emit(new CartProduct(product, this.quantity));
  }
}
