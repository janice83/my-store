import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = products;
  product: any;


  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.products);
     this.route.paramMap.subscribe(params => {
     this.product = products[+params.get('productId')];
   });
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
