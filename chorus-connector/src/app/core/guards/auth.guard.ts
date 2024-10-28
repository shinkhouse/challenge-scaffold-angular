import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authentication = inject(AuthenticationService);
  const router = inject(Router);
  if (!authentication.isAuthenticated()) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
