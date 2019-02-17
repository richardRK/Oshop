import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  order$: Observable<any[]>;

  constructor(
    private auth: AuthService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.order$ = this.auth.user$
      .switchMap(user => this.orderService.getOrderByUser(user.uid));
  }
}
