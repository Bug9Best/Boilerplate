import { CanActivateFn, Router } from '@angular/router';

export const authenGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  const router = new Router();
  router.navigateByUrl('/login');
  return false;
};
