import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../../core/model/cart-item.model';
import { Cart } from '../../../core/model/cart.model';
import { CartService } from '../../../core/service/cart.service';

@Component({
  selector: '[cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() cart: Cart;
  @Input() item: CartItem;

  constructor(private cartService: CartService) {
  }

  add() {
    this.cartService.changeQuantity(this.cart, this.item, this.item.quantity + 1);
  }

  subtract() {
    this.cartService.changeQuantity(this.cart, this.item, this.item.quantity - 1);
  }

  remove() {
    this.cartService.remove(this.cart, this.item);
  }

}
