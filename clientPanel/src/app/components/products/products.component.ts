import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import 'rxjs/add/operator/switchMap'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {


  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartSrvc: ShoppingCartService
  ) {



    productService
      .getAll()
      .subscribe(products => {

        //first get all the products
        this.products = products;

        //to get the current route params
        route.queryParamMap.subscribe(params => {
          this.category = params.get('category')

          //filtering logic
          this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : this.products;

        });
      });





  }

  async ngOnInit() {
    this.subscription = (await this.shoppingCartSrvc.getCart())
      .subscribe(cart => this.cart = cart);

  }
  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}
