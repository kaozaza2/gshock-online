import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(
    private productService: ProductService
  ) {
    // Empty constructor
  }

  resolve(route: ActivatedRouteSnapshot) {
    const productId = Number(route.paramMap.get('productId'));
    return this.productService.getProduct(productId);
  }
}
