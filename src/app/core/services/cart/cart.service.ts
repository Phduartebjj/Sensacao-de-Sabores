import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartItem } from '../../models/cart-item.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly cartItems = signal<CartItem[]>(this.getStorageCart());
  readonly items = this.cartItems.asReadonly();

  readonly totalItems = computed(() =>
    this.cartItems().reduce((total, item) => total + item.quantity, 0),
  );

  private getStorageCart(): CartItem[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  private updateStorageCart(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem('cart', JSON.stringify(this.cartItems()));
  }

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

    this.updateStorageCart();
  }

  removeFromCart(productId: string): void {
    this.cartItems.update((items) => items.filter((item) => item.product.id !== productId));

    this.updateStorageCart();
  }

  clearCart(): void {
    this.cartItems.set([]);
    this.updateStorageCart();
  }

  increaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
    this.updateStorageCart();
  }

  decreaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
    this.updateStorageCart();
  }
}
