import { Component, inject } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { routes } from '../app.routes';

@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent {
  product:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        // console.log(response);
        this.product = response;
    })  
  }
}