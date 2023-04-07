import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css'],
})
export class ProductGridItemComponent {
  @Input() product: Product | undefined;

  constructor() {}
}
