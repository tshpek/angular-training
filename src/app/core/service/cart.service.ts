import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { CartItem } from '../model/cart-item.model';

@Injectable()
export class CartService {

  getCart(): Cart {
    return new Cart();
  }

  addProduct(cart: Cart, product: Product): void {
    const present = cart.items.find(i => i.product === product);
    if (present) {
      present.quantity++;
    } else {
      cart.items.push({
        product: product,
        quantity: 1,
      });
    }
    this.recalculate(cart);
  }

  changeQuantity(cart: Cart, item: CartItem, quantity: number) {
    item.quantity = quantity;
    this.recalculate(cart);
  }

  remove(cart: Cart, item: CartItem) {
    const index = cart.items.indexOf(item);
    if (index === -1) {
      return;
    }
    cart.items.splice(index, 1);
    this.recalculate(cart);
  }

  private recalculate(cart: Cart) {
    cart.sum = cart.items
    .map(i => i.product.price * i.quantity)
    .reduce((a, b) => a + b);
  }

}
