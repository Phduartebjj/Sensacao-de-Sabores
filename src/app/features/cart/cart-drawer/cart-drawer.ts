import { Component, inject, output } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  imports: [],
  selector: 'app-cart-drawer',
  styleUrl: './cart-drawer.css',
  templateUrl: './cart-drawer.html',
})
export class CartDrawer {
  private readonly cart = inject(CartService);

  readonly items = this.cart.items;
  readonly totalItems = this.cart.totalItems;
  readonly totalPrice = this.cart.totalPrice;

  closed = output<void>();
  
  increaseQuantity(productId: string): void {
    this.cart.increaseQuantity(productId);
  }

  decreaseQuantity(productId: string): void {
    this.cart.decreaseQuantity(productId);
  }

  removeItem(productId: string): void {
    this.cart.removeFromCart(productId);
  }
}
