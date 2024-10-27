import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated().then((authenticated) => {
    if (!authenticated) {
      router.navigate(['/login']);
      return false;
    }
    return true;
  });
};
