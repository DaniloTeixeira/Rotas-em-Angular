import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../login/services/auth/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAutenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
