import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

   items: any[] = [];

  constructor( private http: HttpClient) { }

   addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingRates() {
    return this.http.get('/assets/shipping.json')
  }

}
