import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  onSelectProduct(product) {
    this.selectedProduct = product;
    this.productService.getProduct(3)
      .subscribe(product => console.log(product));
  }

  ngOnInit() {
    this.getProducts();
  }

  //call getProducts from product.service.ts
  getProducts(): void {
    const products = this.productService.getProducts().subscribe(products => this.products = products);
  }

  save(product): void {
    this.productService.updateProduct(product)
      .subscribe(() => console.log('run save on product'))
  }

  add(name: string, price: number): void {
    this.productService.addProduct({ name, price } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

}
