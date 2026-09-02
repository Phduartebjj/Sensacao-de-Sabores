import { Component, input, signal } from '@angular/core';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';

@Component({
  imports: [NgFor, NgIf, DecimalPipe],
  selector: 'app-product-details-sheet',
  styleUrl: './product-details-sheet.css',
  templateUrl: './product-details-sheet.html',
  standalone: true,
})
export class ProductDetailsSheet {
  product = input.required<Product>();
  quantity = signal(0);

  increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(0, value - 1));
  }
}
