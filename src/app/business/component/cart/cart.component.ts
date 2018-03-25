import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cart: Cart;

}
