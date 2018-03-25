import { Product } from './product.model';
import { CartItem } from './cart-item.model';

export class Cart {
  items = new Array<CartItem>();
  sum: number;
}
