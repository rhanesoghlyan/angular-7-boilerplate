import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {HttpTokenInterceptor} from './interceptor/http.interceptor';
import {AuthGuard} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
    },
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
}
