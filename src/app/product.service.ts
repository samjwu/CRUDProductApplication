import { Injectable } from '@angular/core';
import { Product } from "./product";

const products = [
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
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }
}
