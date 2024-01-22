import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any;
  httpClient = inject(HttpClient);
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.httpClient
      .get("https://dummyjson.com/products")
      .subscribe((response: any) => {
        // console.log(response);
        this.products = response.products;
      });
  }
}
