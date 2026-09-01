import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card.component/product-card.component';

@Component({
  imports: [ProductCardComponent],
  selector: 'app-product-carousel',
  styleUrl: './product-carousel.css',
  templateUrl: './product-carousel.html',
})
export class ProductCarousel {
  private readonly productService = inject(ProductService);

  readonly products = this.productService.products;
}
