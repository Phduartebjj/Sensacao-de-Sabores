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
    this.isClosing.set(false);
    this.cartOpen.set(true);
  }

  isClosing = signal(false);

  closeCart(): void {
    if (this.isClosing()) return;

    this.isClosing.set(true);

    setTimeout(() => {
      this.cartOpen.set(false);
      this.isClosing.set(false);
    }, 300);
  }
  cartItemCount = this.cartService.totalItems;
}
