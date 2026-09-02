import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card.component/product-card.component';
import { CartService } from '../../../core/services/cart/cart.service';
import { Product } from '../../../core/models/product.model';

@Component({
  imports: [ProductCardComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  private readonly productsService = inject(ProductService);
  private readonly cartService = inject(CartService);
  readonly products = this.productsService.products;

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  readonly selectedCategory = signal<string | null>(null);

  readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();

    if (!category) {
      return this.products();
    }

    return this.products().filter((product) => product.category === category);
  });

  onCategoryChange(event: Event | null): void {
    const select = event?.target as HTMLSelectElement;

    this.selectedCategory.set(select.value || null);
  }
}
