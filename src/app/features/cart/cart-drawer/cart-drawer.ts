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

  private createWhatsAppMessage(): string {
    const items = this.cart.items();

    const products = items
      .map((item) => `• ${item.quantity}x ${item.product.name} — ${item.product.flavor}`)
      .join('\n');

    const total = this.totalPrice().toFixed(2).replace('.', ',');

    return `Olá! Tudo bem?

Quero fazer um pedido:

*Meu pedido*

${products}

*Total: R$ ${total}*

Gostaria de confirmar a disponibilidade dos produtos.`;
  }

  finishOrder(): void {
    const message = this.createWhatsAppMessage();
    const phone = '5521965494017';

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}
