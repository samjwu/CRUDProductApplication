import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import { Observable, of } from "rxjs";
import { Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, 'Operation: ${operation}');
      return of(result as T);
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL)
    .pipe(
      catchError(this.handleError('getProducts', []))
    );
  }
}