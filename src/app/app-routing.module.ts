import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFrontComponent } from './components/screens/store-front/store-front.component';
import { CartComponent } from './components/screens/cart/cart.component';

const routes: Routes = [
  { path: '', component: StoreFrontComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
