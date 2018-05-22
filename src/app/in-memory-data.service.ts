import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
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

    return { products };
  }

  constructor() { }
}
