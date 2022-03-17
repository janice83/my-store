import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faMobile, faTrademark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faMobile = faMobile;
  faTrademark = faTrademark;

  constructor() { }

  ngOnInit(): void {
  }

}
