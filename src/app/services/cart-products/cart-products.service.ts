import { Injectable } from '@angular/core';
import { CartProduct } from '../../models/cart-product';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartProductsService {
  private cartProductsSubject = new BehaviorSubject<CartProduct[]>([]);
  private newProductSubject = new BehaviorSubject<CartProduct>({} as CartProduct);
  private productRemovedSubject = new BehaviorSubject<CartProduct>({} as CartProduct);
  private cartProducts: CartProduct[] = [];

  constructor() {}

  subscribeToCartProducts(): Observable<CartProduct[]> {
    return this.cartProductsSubject.asObservable();
  }

  subscribeToNewProductAdded(): Observable<CartProduct> {
    return this.newProductSubject.asObservable();
  }

  subscribeToProductRemoved(): Observable<CartProduct> {
    return this.productRemovedSubject.asObservable();
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
      this.newProductSubject.next(cartProduct);
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
        this.productRemovedSubject.next(cartProduct);
      }
    }
    this.cartProductsSubject.next(this.cartProducts);
  }
}
