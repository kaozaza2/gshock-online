import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    let productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productService.getProduct(productId);
  }

}
