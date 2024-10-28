import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const AdminGuard: CanActivateFn = (route, state) => {
  const authentication = inject(AuthenticationService);
  const router = inject(Router);
  if (!authentication.isUserAdmin()) {
    router.navigateByUrl('/choruses');
    return false;
  }
  return true;
};
