import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

  constructor( private authenticationService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:prefer-const
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(req);
  }
}
