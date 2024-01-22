import { Component, inject } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-home-product",
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: "./home-product.component.html",
  styleUrl: "./home-product.component.css",
})
export class HomeProductComponent {
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
