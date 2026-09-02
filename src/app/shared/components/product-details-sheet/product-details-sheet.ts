import { Component, inject, input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product-details-sheet',
  styleUrl: './product-details-sheet.css',
  templateUrl: './product-details-sheet.html',
  standalone: true,
})
export class ProductDetailsSheet {
  private readonly cart = inject(CartService);

  product = input.required<Product>();
  quantity = signal(0);

  increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(0, value - 1));
  }

  addProductToCart(): void {
    this.cart.addToCart(this.product(), this.quantity());
  }
}
