import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import { Observable, of } from "rxjs";
import { Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

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

  //get products array from in-memory-data.service.ts
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL)
    .pipe(
      tap(product => console.log('run getProducts')),
      catchError(this.handleError('getProducts', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsURL}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(product => console.log(`Get product with id: ${id}`, product)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsURL, product, httpOptions)
      .pipe(
        tap(_ => console.log(`run updateProduct on product with id ${product.id}`)),
        catchError(this.handleError<any>('updateProduct'))
    )
  }
}