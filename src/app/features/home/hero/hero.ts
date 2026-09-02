import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button';

@Component({
  imports: [ButtonComponent],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class HeroComponent {
  goToCatalog(): void {
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openWhatsApp(): void {
    const phoneNumber = '5521998501577';
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de fazer um pedido.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
