import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();

  readonly totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.cartItems().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  addToCart(product: Product, quantity: number = 1): void {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      } else {
        return [...items, { product, quantity }];
      }
    });
  }

  removeFromCart(productId: string): void {
    this.cartItems.update((items) => items.filter((item) => item.product.id !== productId));
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  increaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  decreaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }
}
