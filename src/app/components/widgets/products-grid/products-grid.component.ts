import { Component } from '@angular/core';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartProductsService } from 'src/app/services/cart-products.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css'],
})
export class ProductsGridComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService, readonly cartProductsService: CartProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => (this.products = products));
  }

  onProductAdded(cartProduct: CartProduct) {
    console.log('onProductAdded', cartProduct);
    this.cartProductsService.addToCart(cartProduct);
  }

  onProductRemoved(cartProduct: CartProduct) {
    this.cartProductsService.removeFromCart(cartProduct);
  }
}
