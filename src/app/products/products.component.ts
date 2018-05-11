import { Component, OnInit } from '@angular/core';
import { Product } from "../product"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Apple",
      price: 2.99
    },
    {
      id: 2,
      name: "Pear",
      price: 1.99
    },
    {
      id: 3,
      name: "Orange",
      price: 0.99
    }
  ]

  selectedProduct: Product

  constructor() { }

  onSelectProduct(product) {
    this.selectedProduct = product
  }

  ngOnInit() {}

}
