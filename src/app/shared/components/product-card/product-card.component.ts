import { Component, computed, input, output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { PrecoFormatadoPipe } from '../../pipes/preco-formatado-pipe/preco-formatado-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrecoFormatadoPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
  oldPrice = input<number | undefined>(undefined);

  addToCart = output<Product>();
  cardClick = output<Product>();

  readonly productImage = computed(() => {
    const images = this.product().image;
    return images && images.length > 0 ? images[0] : '';
  });

  onAddToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.addToCart.emit(this.product());
  }

  onCardClick(): void {
    this.cardClick.emit(this.product());
  }
}
