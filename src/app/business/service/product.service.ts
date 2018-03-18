import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.enum';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [this.createProduct1(), this.createProduct2(), this.createProduct3()];
  }

  private createProduct1(): Product {
    const product1 = new Product();
    product1.category = Category.MENS;
    product1.description = 'Some desc';
    product1.isAvailable = true;
    product1.name = 'Adidas';
    product1.price = 999;
    return product1;
  }

  private createProduct2(): Product {
    const product2 = new Product();
    product2.category = Category.WOMENS;
    product2.description = 'Some other desc';
    product2.isAvailable = false;
    product2.name = 'Nike';
    product2.price = 888;
    return product2;
  }

  private createProduct3(): Product {
    const product3 = new Product();
    product3.category = Category.WOMENS;
    product3.description = 'Some other desc';
    product3.isAvailable = true;
    product3.name = 'Puma';
    product3.price = 888;
    return product3;
  }


}
