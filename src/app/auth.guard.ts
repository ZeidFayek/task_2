import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let userEmail;
  
  if (typeof window != 'undefined') {
    userEmail = localStorage.getItem('userEmail');
  }
  if (userEmail !== null) {
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }

};
