import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductsListComponent } from './cart-products-list.component';

describe('CartProductsListComponent', () => {
  let component: CartProductsListComponent;
  let fixture: ComponentFixture<CartProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartProductsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
