import { computed, Injectable, signal } from '@angular/core';
import { PRODUCTS } from '../../data/products.data';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsList = signal<Product[]>(PRODUCTS);

  readonly products = this.productsList.asReadonly();

  readonly searchEmphasis = computed(() => {
    return this.products().filter((product) => product.badge?.toLowerCase().includes('destaque'));
  });
}
