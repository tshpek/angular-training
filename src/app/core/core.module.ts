import { NgModule } from '@angular/core';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';
import { LocalStorageService } from './service/local-storage.service';
import { ConfigService } from './service/config.service';
import { ConstantService } from './service/constant.service';
import { GeneratorService } from './service/generator.service';

@NgModule({
  providers: [
    CartService,
    ProductService,
    LocalStorageService,
    ConfigService,
    { provide: ConstantService,
      useValue: {
        app: 'Shop app',
        version: '0.1'
      }
    },
    { provide: GeneratorService, useFactory: () => new GeneratorService(8) }
  ],
})
export class CoreModule { }
