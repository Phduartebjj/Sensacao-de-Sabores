import { Component, input, output } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'outline';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class ButtonComponent {
  variant = input<ButtonType>('primary');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit'>('button');

  clicked = output<MouseEvent>();
}
