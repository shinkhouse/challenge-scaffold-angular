import { Injectable } from '@angular/core';
import { users } from '../mock/users'; // Import the mock users data
import { User, Users } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userArr: Users = users;
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
      localStorage.setItem('user', JSON.stringify(user));
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

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  isUserAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string) as User;
    return user && user.roles.find((role) => role.role_name === 'Admin') ? true : false;
  }
}
