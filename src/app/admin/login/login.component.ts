import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
  
@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6),]),
    email: new FormControl("", [Validators.required, Validators.email]),
        phone: new FormControl("", [Validators.required, Validators.pattern('0+[0-9]+')]),

  });
  mess = "";
  router = inject(Router)
  onSubmit() {
    let u = this.loginForm.controls.username.value;
    let p = this.loginForm.controls.password.value;
    if ((u = "admin") && (p = "123456")) {
      this.mess = "Đăng nhập thành công!";
      localStorage.setItem('login','ok')
      this.router.navigate(['dashboard'])
    } else {
      this.mess = "Sai tên đăng nhập hoặc mật khu";
    }
  }
}
