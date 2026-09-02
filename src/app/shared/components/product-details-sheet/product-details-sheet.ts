import { Component, input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  imports: [],
  selector: 'app-product-details-sheet',
  styleUrl: './product-details-sheet.css',
  templateUrl: './product-details-sheet.html',
})
export class ProductDetailsSheet {
  product = input.required<Product>();
}
