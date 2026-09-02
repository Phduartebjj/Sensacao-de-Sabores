import { Component } from '@angular/core';
import { BadgeComponent } from '../../../shared/components/badge/badge';

@Component({
  imports: [BadgeComponent],
  selector: 'app-contact',
  styleUrl: './contact.component.css',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  openWhatsApp(): void {
    const phoneNumber = '5521998501577';
    const message = encodeURIComponent('Olá! vim pelo site e gostaria de fazer um pedido.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
