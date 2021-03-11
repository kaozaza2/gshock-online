import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('assets/products.json').subscribe(products => {
      this.products = products;
    });
  }

  async getAllProducts() {
    return new Promise(async (resolve) => {
      while (true) {
        if (this.products) {
          resolve(this.products);
          break;
        }
        await this.sleep(100);
      }
    });
  }

  getProduct(productId: number) {
    return this.products.find(x => x.id == productId);
  }

  async sleep(ms = 0) {
    return new Promise(resolve => setTimeout(() => {resolve(true)}, ms));
  }
}
