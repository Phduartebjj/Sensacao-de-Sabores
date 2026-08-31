import { Product } from './product.model copy';

export interface CartItem {
  product: Product;
  quantity: number;
}
