import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';
import { Cart } from '../../model/cart.model';

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
