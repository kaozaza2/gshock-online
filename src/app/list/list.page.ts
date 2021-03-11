import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  products: any;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    this.productService.getAllProducts().then(products => {
      this.products = products;
    });
  }

  openProductPage(productId: number) {
    this.router.navigateByUrl(`product/${productId}`);
  }

}
