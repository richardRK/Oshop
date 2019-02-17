import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,private shoppingCartSrvc:ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/order').push(order);
    this.shoppingCartSrvc.clearCart();
    return result;
  }
  getAllOrders() {
    return this.db.list('/order');
  }

  getOrderByUser(userId: string) {
    return this.db.list('/order', {
      query: {
        orderByChild: 'user/userId',
        equalTo: userId
      }
    });
  }

  getOrderById(orderId: string) {
    return this.db.object('/order/' + orderId);
  }

}
