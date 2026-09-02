import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class BadgeComponent {
  icon = input<string>('assets/icons/heart-seal.svg');
  title = input<string>('Feito com');
  subtitle = input<string>('Carinho');
  link = input<string>('/');
  variant = input<'' | 'wide'>('');
}
