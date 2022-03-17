import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { faInstagram, faFacebookF, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram =faInstagram;
  faTwitterSquare = faTwitterSquare;
  products = products;



  constructor(private cartService: CartService) { }

  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }

}
