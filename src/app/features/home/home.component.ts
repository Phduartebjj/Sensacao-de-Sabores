import { Component, inject } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { BenefitsComponent } from './benefits/benefits';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductService } from '../../core/services/product/product.service';
import { CartService } from '../../core/services/cart/cart.service';
import { Product } from '../../core/models/product.model';
import { ProductCarousel } from './product-carousel/product-carousel';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsSheet } from '../../shared/components/product-details-sheet/product-details-sheet';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  readonly products = this.productService.products;

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
