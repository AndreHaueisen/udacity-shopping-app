import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridItemComponent } from './product-grid-item.component';

describe('ProductGridItemComponent', () => {
  let component: ProductGridItemComponent;
  let fixture: ComponentFixture<ProductGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductGridItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
