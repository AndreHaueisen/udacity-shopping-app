import { Component } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { CartProductsService } from 'src/app/services/cart-products.service';

@Component({
  selector: 'app-cart-products-list',
  templateUrl: './cart-products-list.component.html',
  styleUrls: ['./cart-products-list.component.css'],
})
export class CartProductsListComponent {
  cartProducts: CartProduct[] = [];

  constructor(readonly cartProductsService: CartProductsService) {}

  ngOnInit(): void {
    console.log('cartProducts init');
    this.cartProductsService.subscribeToCartProducts().subscribe((cartProducts) => {
      console.log('cartProducts', cartProducts);
      this.cartProducts = cartProducts;
    });
  }

  onProductAdded(cartProduct: CartProduct) {
    console.log('onProductAdded from list: ', cartProduct);
    this.cartProductsService.addToCart(cartProduct);
  }

  onProductRemoved(cartProduct: CartProduct) {
    this.cartProductsService.removeFromCart(cartProduct);
  }
}
