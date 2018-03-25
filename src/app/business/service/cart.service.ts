import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';

@Injectable()
export class CartService {

  getCart(): Cart {
    return new Cart();
  }

  addProduct(cart: Cart, product: Product): void {
    if (cart.products.find(p => p === product)) {
      return;
    }
    cart.products.push(product);
  }

}
