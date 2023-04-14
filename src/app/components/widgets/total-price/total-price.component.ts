import { Component } from '@angular/core';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css'],
})
export class TotalPriceComponent {
  totalPrice: number = 0;

  constructor(private cardProductsService: CartProductsService) {}

  ngOnInit(): void {
    this.cardProductsService.subscribeToCartProducts().subscribe((cartProducts) => {
      this.totalPrice = cartProducts.reduce((total, cartProduct) => {
        return total + cartProduct.product.price * cartProduct.quantity;
      }, 0);
    });
  }
}
