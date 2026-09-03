import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';
import { CartDrawer } from '../../../../features/cart/cart-drawer/cart-drawer';

@Component({
  imports: [CartDrawer],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  private readonly cartService = inject(CartService);
  cartOpen = signal(false);

  openCart(): void {
    this.cartOpen.set(true);
  }

  closeCart(): void {
    this.cartOpen.set(false);
  }

  cartItemCount = this.cartService.totalItems;
}
