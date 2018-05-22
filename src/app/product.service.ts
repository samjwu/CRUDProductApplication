import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import { Observable, of } from "rxjs";
import { Http } from '@angular/http';

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

  constructor(private http: HttpClient) { }

  private productsURL = 'api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL);
  }
}