import { Component, OnInit } from '@angular/core';
import { Product } from "../product"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = {
    id: 1,
    name: "Apple",
    price: 2.99
  }

  constructor() { }

  ngOnInit() {
    console.log("OnInit")
  }

}
