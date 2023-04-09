import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductsService } from 'src/app/services/cart-products.service';

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

  constructor(private cartProductsService: CartProductsService) {}

  ngOnInit(): void {
    this.cartProductsService.subscribeToSingleCartProduct(this.product!.id).subscribe((cartProduct) => {
      if (cartProduct) {
        this.quantity = cartProduct.quantity;
      } else {
        this.quantity = 0;
      }
    });
  }

  addToCart(): void {
    this.addToCartEmitter.emit(new CartProduct(this.product!, this.quantity));
  }

  removeFromCart(): void {
    this.removeFromCartEmitter.emit(new CartProduct(this.product!, this.quantity));
  }
}
