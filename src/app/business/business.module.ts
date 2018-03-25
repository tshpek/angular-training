import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';
import { CartItemComponent } from './component/cart-item/cart-item.component';
import { GrayHoverDirective } from './directive/mouse-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    GrayHoverDirective
  ],
  exports: [
    ProductListComponent
  ],

})
export class BusinessModule { }
