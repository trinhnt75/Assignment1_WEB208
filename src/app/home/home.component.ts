import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
// import { HomeProductComponent } from '../home-product/home-product.component';
import { ProductsComponent } from '../products/products.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
