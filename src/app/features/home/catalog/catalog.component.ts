import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card.component/product-card.component';

@Component({
  imports: [ProductCardComponent],
  selector: 'app-catalog-component',
  styleUrl: './catalog.component.css',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  private readonly productsService = inject(ProductService);

  readonly products = this.productsService.products;
}
