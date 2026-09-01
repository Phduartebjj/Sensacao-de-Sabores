import { Component, inject } from '@angular/core';
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
}
