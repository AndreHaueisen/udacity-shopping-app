import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreFrontComponent } from './components/screens/store-front/store-front.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsGridComponent } from './components/widgets/products-grid/products-grid.component';
import { ProductGridItemComponent } from './components/widgets/product-grid-item/product-grid-item.component';
import { NavBarComponent } from './components/widgets/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, StoreFrontComponent, ProductsGridComponent, ProductGridItemComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
