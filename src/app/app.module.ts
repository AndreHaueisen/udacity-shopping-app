import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreFrontComponent } from './components/screens/store-front/store-front.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsGridComponent } from './components/widgets/products-grid/products-grid.component';
import { ProductGridItemComponent } from './components/widgets/product-grid-item/product-grid-item.component';
import { NavBarComponent } from './components/widgets/nav-bar/nav-bar.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { CartProductsListComponent } from './components/widgets/cart-products-list/cart-products-list.component';
import { CartProductItemComponent } from './components/widgets/cart-product-item/cart-product-item.component';
import { PaymentInputFormComponent } from './components/widgets/payment-input-form/payment-input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    ProductsGridComponent,
    ProductGridItemComponent,
    NavBarComponent,
    CartComponent,
    CartProductsListComponent,
    CartProductItemComponent,
    PaymentInputFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
