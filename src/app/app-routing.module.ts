import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFrontComponent } from './components/screens/store-front/store-front.component';
import { CartComponent } from './components/screens/cart/cart.component';
import { PurchaseSuccessComponent } from './components/screens/purchase-success/purchase-success.component';

const routes: Routes = [
  { path: '', component: StoreFrontComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchase-success', component: PurchaseSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
