import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  passwordVisible: boolean = false;

  constructor() {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember me:', this.rememberMe);
  }
}
