import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart$;
  constructor(private scartSrvc:ShoppingCartService) { }

  async ngOnInit() {

    this.cart$ = await this.scartSrvc.getCart();
  }
  clearCart(){
    console.log('clear cart');
    this.scartSrvc.clearCart();
  }

}
