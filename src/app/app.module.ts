import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
