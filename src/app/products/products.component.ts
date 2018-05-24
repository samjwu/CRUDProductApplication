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

  getProducts(): void {
    const products = this.productService.getProducts().subscribe(products => this.products = products);
  }

}
