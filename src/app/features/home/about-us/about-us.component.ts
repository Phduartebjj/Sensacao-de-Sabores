import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about-us',
  styleUrl: './about-us.component.css',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  currentSlide = signal(0);

  images = [
    'assets/images/products/400x400/Empada_de_frango-400.webp',
    'assets/images/products/400x400/Bolo_de_ninho-400.webp',
    'assets/images/products/400x400/Empada_de_frango-400.webp',
  ];

  nextSlide(): void {
    this.currentSlide.update((index) => (index === this.images.length - 1 ? 0 : index + 1));
  }

  previousSlide(): void {
    this.currentSlide.update((index) => (index === 0 ? this.images.length - 1 : index - 1));
  }
}
