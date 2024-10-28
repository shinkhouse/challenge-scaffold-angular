import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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

  constructor(private auth: AuthenticationService, private router: Router) {}

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  login() {
      const authentication = this.auth.login(this.email, this.password);
      if (authentication.success) {
          this.router.navigateByUrl('/choruses');
      }
  }
}
