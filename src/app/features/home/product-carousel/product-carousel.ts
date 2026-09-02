import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card.component/product-card.component';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  imports: [ProductCardComponent],
  selector: 'app-product-carousel',
  styleUrl: './product-carousel.css',
  templateUrl: './product-carousel.html',
})
export class ProductCarousel {
  private readonly productService = inject(ProductService);

  readonly emphasisProducts = this.productService.searchEmphasis;

  readonly products = this.productService.products;
  private readonly cartService = inject(CartService);
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
