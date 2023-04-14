import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css'],
})
export class ProductGridItemComponent {
  @Input() product: Product | undefined;
  @Output() addToCartEmitter = new EventEmitter<CartProduct>();
  @Output() removeFromCartEmitter = new EventEmitter<CartProduct>();
  cartProduct: CartProduct | undefined;

  constructor(private cartProductsService: CartProductsService) {}

  ngOnInit(): void {
    this.cartProductsService.subscribeToSingleCartProduct(this.product!.id).subscribe((cartProduct) => {
      this.cartProduct = cartProduct;
    });
  }

  addToCart(): void {
    this.addToCartEmitter.emit(this.cartProduct ?? new CartProduct(this.product!));
  }

  removeFromCart(): void {
    this.removeFromCartEmitter.emit(this.cartProduct ?? new CartProduct(this.product!));
  }
}
