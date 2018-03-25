import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ProductService } from '../../../core/service/product.service';
import { CartService } from '../../../core/service/cart.service';
import { Cart } from '../../../core/model/cart.model';
import { Product } from '../../../core/model/product.model';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, CartService]
})
export class ProductListComponent implements OnInit, AfterViewInit {

  cart: Cart;
  products: Product[];

  @ViewChild('cartComponent') cartComponent: CartComponent;

  constructor(private productService: ProductService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.products = this.productService.getProducts();

    // DEMO
    console.log('Cart component html onInit stage: ' + JSON.stringify(this.cartComponent.cart));
  }

  ngAfterViewInit(): void {
    console.log('Cart component html afterViewInit stage: ' + JSON.stringify(this.cartComponent.cart));
  }

  onBuyClick(product: Product) {
    this.cartService.addProduct(this.cart, product);
  }

}
