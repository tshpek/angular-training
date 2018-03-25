import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    CartComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class BusinessModule { }
