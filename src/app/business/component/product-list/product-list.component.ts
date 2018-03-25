import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../core/service/product.service';
import { CartService } from '../../../core/service/cart.service';
import { Cart } from '../../../core/model/cart.model';
import { Product } from '../../../core/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, CartService]
})
export class ProductListComponent implements OnInit {

  cart: Cart;
  products: Product[];

  constructor(private productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.products = this.productService.getProducts();
  }

  onBuyClick(product: Product) {
    this.cartService.addProduct(this.cart, product);
  }

}
