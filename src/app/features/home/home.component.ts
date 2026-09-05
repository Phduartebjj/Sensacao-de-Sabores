import { Component, inject, signal } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { BenefitsComponent } from './benefits/benefits';
import { ProductDetailsSheet } from '../../shared/components/product-details-sheet/product-details-sheet';
import { ProductService } from '../../core/services/product/product.service';
import { CartService } from '../../core/services/cart/cart.service';
import { Product } from '../../core/models/product.model';
import { ProductCarousel } from './product-carousel/product-carousel';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    ProductCarousel,
    CatalogComponent,
    AboutUsComponent,
    ContactComponent,
    ProductDetailsSheet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  selectedProduct = signal<Product | null>(null);
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  readonly products = this.productService.products;
  isClosing = signal(false);

closeProduct(): void {
  if (this.isClosing()) return;

  this.isClosing.set(true);

  setTimeout(() => {
    this.selectedProduct.set(null);
    this.isClosing.set(false);
    this.router.navigate(['/']);
  }, 300);
}
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (!id) {
        return;
      }

      const product = this.productService.getProductById(id);

      if (product) {
        this.selectedProduct.set(product);
      }
    });
  }
}
