import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class FooterComponent {
  openWhatsApp(): void {
    const phoneNumber = '5521998501577';
    const message = encodeURIComponent('Olá! vim pelo site e gostaria de fazer um pedido.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
