import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import 'rxjs/add/operator/switchMap'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartSrvc: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartSrvc.getCart());
    this.populateProducts();
  }

  private populateProducts() {
    
    this.productService
      .getAll()
      .subscribe(products => {

        //first get all the products
        this.products = products;

        //to get the current route params
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category')

          this.applyFilter();

        });
      });
  }

  private applyFilter() {
    //filtering logic
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : this.products;
  }


}
