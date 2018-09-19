import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

import {AuthService} from '../core/services/auth.service';
import {map, take} from 'rxjs/operators';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));
  }
}
