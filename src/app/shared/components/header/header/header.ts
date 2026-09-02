import { Component, inject } from '@angular/core';
import { CartService } from '../../../../core/services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  private readonly cartService = inject(CartService);

  cartItemCount = this.cartService.totalItems;
}
