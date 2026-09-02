import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { ProductDetailsSheet } from '../../../shared/components/product-details-sheet/product-details-sheet';

@Component({
  imports: [ProductCardComponent, ProductDetailsSheet],
  selector: 'app-product-carousel',
  styleUrl: './product-carousel.css',
  templateUrl: './product-carousel.html',
})
export class ProductCarousel {
  private readonly productService = inject(ProductService);
  selectedProduct = signal<Product | null>(null);
  readonly emphasisProducts = this.productService.searchEmphasis;

  readonly products = this.productService.products;
  private readonly cartService = inject(CartService);
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  openProduct(product: Product): void {
    this.selectedProduct.set(product);
  }

  closeProduct(): void {
    this.selectedProduct.set(null);
  }
}
