import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }
  login(user: User) {
    // tslint:disable-next-line: no-shadowed-variable
    return this.http.post<User>(`http://localhost:8000/api/login`, user).pipe(map(user => {
      const decoded = jwt_decode(user.token);
      console.log(decoded);

      localStorage.setItem('token', user.token);
      localStorage.setItem('currentUser', JSON.stringify(user));
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('username', JSON.stringify(decoded['username']));
      this.currentUserSubject.next(user);
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('roles', JSON.stringify(decoded['roles']));
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('email', JSON.stringify(decoded['email']));
      return user;
      }));
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  logout() {
    // tslint:disable-next-line:quotemark
    localStorage.removeItem("token");
  }

  sendResetPasswordLink(data) {
    return this.http.post('http://127.0.0.1:8000/api/reset-password-request', data);
  }

  resetPassword(data) {
    return this.http.post('http://127.0.0.1:8000/api/change-password', data);
  }
}
