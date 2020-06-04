import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  
  constructor(
    private cartService: CartService,
    private _location: Location
    ) {
    } 

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  backClicked() {
    this._location.back();
  }

}