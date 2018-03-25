import { NgModule } from '@angular/core';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';


@NgModule({
  providers: [
    CartService,
    ProductService
  ],
})
export class CoreModule { }
