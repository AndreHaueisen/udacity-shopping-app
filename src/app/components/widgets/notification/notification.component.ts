import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  constructor(
    public dialogRef: MatDialogRef<NotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; content: string },
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
