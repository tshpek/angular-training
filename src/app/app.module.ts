import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusinessModule } from './business/business.module';
import { CoreModule } from './core/core.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BusinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
