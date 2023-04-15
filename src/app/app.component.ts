import { Component } from '@angular/core';
import { CartProductsService } from './services/cart-products/cart-products.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from './components/widgets/notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'udacity-shopping-app';

  constructor(private cartProductsService: CartProductsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartProductsService.subscribeToNewProductAdded().subscribe((cartProduct) => {
      const title = `${cartProduct.product.name} added to cart!`;

      this.openDialog(title);
    });

    this.cartProductsService.subscribeToProductRemoved().subscribe((cartProduct) => {
      const title = `${cartProduct.product.name} removed from cart!`;

      this.openDialog(title);
    });
  }

  openDialog(title: string) {
    this.dialog.open(NotificationComponent, {
      data: {
        title,
      },
      width: '350px',
    });
  }
}
