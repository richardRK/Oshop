import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {


  cart$: Observable<ShoppingCart>;


  constructor(
    private shoppingCartsrvc: ShoppingCartService,
  ) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartsrvc.getCart();
  }


}
