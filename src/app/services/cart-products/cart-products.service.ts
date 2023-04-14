import { Injectable } from '@angular/core';
import { CartProduct } from '../../models/cart-product';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  private cartProductsSubject = new BehaviorSubject<CartProduct[]>([]);
  private cartProducts: CartProduct[] = [];

  constructor() {}

  subscribeToCartProducts(): Observable<CartProduct[]> {
    return this.cartProductsSubject.asObservable();
  }

  subscribeToSingleCartProduct(id: number): Observable<CartProduct | undefined> {
    return this.cartProductsSubject.asObservable().pipe(
      map((cartProducts: CartProduct[]) => {
        return cartProducts.find((cartProduct) => cartProduct.product.id === id);
      }),
    );
  }

  addToCart(cartProduct: CartProduct): void {
    const index = this.cartProducts.findIndex((cp) => cp.product.id === cartProduct.product.id);

    if (index === -1) {
      this.cartProducts.push(cartProduct);
    } else {
      this.cartProducts[index] = cartProduct.increateQuantity();
    }
    this.cartProductsSubject.next(this.cartProducts);
  }

  removeFromCart(cartProduct: CartProduct): void {
    const index = this.cartProducts.findIndex((cp) => cp.product.id === cartProduct.product.id);

    if (index !== -1) {
      if (this.cartProducts[index].quantity > 1) {
        this.cartProducts[index] = cartProduct.decreaseQuantity();
      } else {
        this.cartProducts.splice(index, 1);
      }
    }
    this.cartProductsSubject.next(this.cartProducts);
  }
}
