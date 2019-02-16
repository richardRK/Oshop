import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy {

  @Input('cart')cart:ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;
  

  
  constructor(
    private router: Router,
    private orderSrvc: OrderService,
    private authSrvc: AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.authSrvc.user$.subscribe(user => this.userId = user.uid);

  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderSrvc.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

  

}
