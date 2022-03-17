import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any ;
  checkoutForm: any;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

onSubmit(customerData: any) {
  console.warn('Your order has been submitted', customerData);
  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
}

  ngOnInit(): void {
  }

}
