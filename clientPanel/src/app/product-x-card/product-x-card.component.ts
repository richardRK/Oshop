import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-x-card',
  templateUrl: './product-x-card.component.html',
  styleUrls: ['./product-x-card.component.css']
})
export class ProductXCardComponent {


  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }


  addToCart() {
    this.cartService.addToCart(this.product);
  }


}
