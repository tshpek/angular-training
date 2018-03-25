import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.enum';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    // mocked products
    return [
      {
        category: Category.MENS,
        description: 'Some desc',
        isAvailable: true,
        name: 'Adidas',
        price: 999
      },
      {
        category: Category.WOMENS,
        description: 'Some other desc',
        isAvailable: false,
        name: 'Nike',
        price: 888
      },
      {
        category: Category.WOMENS,
        description: 'Some other desc',
        isAvailable: true,
        name: 'Puma',
        price: 888
      }
    ];
  }
}
