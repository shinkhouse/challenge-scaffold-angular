import { Injectable } from '@angular/core';
import { users } from '../mock/users'; // Import the mock users data
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userArr = users;
  constructor() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      this.userArr = JSON.parse(localStorage.getItem('users') as string);
    }
  }

  login(
    email: string,
    password: string
  ): { success: boolean; token?: string; message: string } {
    // Check the userArr for the email and password
    const user = this.userArr.find(
      (user: User) => user.email === email && user.password === password
    );
    if (user) {
      return { success: true, token: 'mock-token', message: 'Success' };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  }

  getUserInfo(email: string) {
    // Find the user by email in the mock users data
    const user = this.userArr.find((user: User) => user.email === email);
    return user
      ? { success: true, user }
      : { success: false, message: 'User not found' };
  }
}
