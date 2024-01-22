import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { guardGuard } from "./Guard/guard.guard";
import { LoginComponent } from "./admin/login/login.component";
import { RegisterComponent } from "./admin/register/register.component";
import { ProductsComponent } from "./products/products.component";
import { ProductAdminComponent } from "./admin/product-admin/product-admin.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-detail/:id", component: ProductDetailsComponent },
  { path: "about", component: AboutComponent },
    { path: "products", component: ProductsComponent },

  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [guardGuard],
    children: [{ path: "product-admin", component: ProductAdminComponent }],
  },
  { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },

];
