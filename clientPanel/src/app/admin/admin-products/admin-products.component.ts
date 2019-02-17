import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {


  products: Product[];
  subscription: Subscription;

  filteredProducts: any[];
  //tableResource: DataTableResource<Product>;
  //items: Product[] = [];
  //itemCount: number; 


  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => this.products = products);
    
  }

  filter(query: string) {

    //first get all the products
    this.filteredProducts = (query.trim()) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }



  ngOnInit() {

    //this.order$ = this.productService.getAll();
    this.filteredProducts = this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
