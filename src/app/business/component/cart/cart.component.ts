import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Cart } from '../../../core/model/cart.model';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cart: Cart;

}
