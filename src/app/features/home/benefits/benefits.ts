import { Component } from '@angular/core';
import { BadgeComponent } from '../../../shared/components/badge/badge';

export interface BenefitItem {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class BenefitsComponent {
  benefits: BenefitItem[] = [
    {
      icon: 'assets/icons/heart-seal.svg',
      title: 'Feito com',
      subtitle: 'Carinho',
    },
    {
      icon: 'assets/icons/whatsapp-seal.svg',
      title: 'Pedido via',
      subtitle: 'Whatsapp',
    },
    {
      icon: 'assets/icons/homemade-seal.svg',
      title: 'Sabor',
      subtitle: 'Caseiro',
    },
    {
      icon: 'assets/icons/quality-seal.svg',
      title: 'Ingredientes',
      subtitle: 'de Qualidade',
    },
  ];
}
