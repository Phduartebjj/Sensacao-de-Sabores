import { Component, inject, input, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';
import { NotificationService } from '../../../core/services/notification/notification.service';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product-details-sheet',
  styleUrl: './product-details-sheet.css',
  templateUrl: './product-details-sheet.html',
  standalone: true,
})
export class ProductDetailsSheet {
  private readonly cart = inject(CartService);
  private readonly notification = inject(NotificationService);
  product = input.required<Product>();
  closed = output<void>();
  quantity = signal(0);
  currentImageIndex = signal(0);

  private pointerStartX = 0;

  onPointerDown(event: PointerEvent): void {
    this.pointerStartX = event.clientX;
  }

  onPointerUp(event: PointerEvent): void {
    const difference = event.clientX - this.pointerStartX;
    if (Math.abs(difference) < 50) {
      return;
    }
    if (difference < 0) {
      this.nextImage();
    } else {
      this.previousImage();
    }
  }

  onPointerCancel(): void {
    this.pointerStartX = 0;
  }

  nextImage(): void {
    const totalImages = this.product().image.length;

    if (totalImages <= 1) {
      return;
    }

    this.currentImageIndex.update((index) => Math.min(index + 1, totalImages - 1));
  }

  previousImage(): void {
    this.currentImageIndex.update((index) => Math.max(index - 1, 0));
  }

  goToImage(index: number): void {
    this.currentImageIndex.set(index);
  }

  increaseQuantity(): void {
    this.quantity.update((value) => value + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update((value) => Math.max(0, value - 1));
  }

  addProductToCart(): void {
    if (this.quantity() <= 0) {
      this.notification.show('✖ Selecione uma quantidade.', 'warning');
      return;
    }
    this.cart.addToCart(this.product(), this.quantity());

    this.notification.show('🛒 Produto adicionado ao carrinho!', 'success');
    this.closed.emit();
  }

  openWhatsApp(product: Product, quantity: number): void {
    if (quantity <= 0) {
      return;
    }

    const phoneNumber = '5521998501577';
    const message = encodeURIComponent(
      `Olá! vim pelo site e gostaria de fazer um pedido.
       Quero comprar um(a) ${product.name + ` sabor: ${product.flavor}`}, quero ${quantity} por favor.`,
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  async shareProduct(): Promise<void> {
    if (navigator.share) {
      await navigator.share({
        title: `${this.product().name} - ${this.product().flavor}`,
        text: `Confira este produto: ${this.product().name} - ${this.product().flavor}`,
        url: window.location.href,
      });
    }
  }
}
