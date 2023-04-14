import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // get products from app/assets/data.json
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  getSingleProduct(id: number): Observable<Product | undefined> {
    return this.http.get<Product[]>('assets/data.json').pipe(
      map((products: Product[]) => {
        return products.find((product) => product.id === id);
      }),
    );
  }
}
