import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product | undefined;
  cartProduct: CartProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartProductsService: CartProductsService,
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.productsService.getSingleProduct(id).subscribe((product) => {
      this.product = product;
    });
    this.cartProductsService.subscribeToSingleCartProduct(id).subscribe((cartProduct) => {
      this.cartProduct = cartProduct;
    });
  }

  addToCart(): void {
    this.cartProductsService.addToCart(this.cartProduct ?? new CartProduct(this.product!));
  }

  removeFromCart(): void {
    this.cartProductsService.removeFromCart(this.cartProduct ?? new CartProduct(this.product!));
  }
}
