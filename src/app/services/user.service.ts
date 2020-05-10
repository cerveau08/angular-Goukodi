import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private sanitize: DomSanitizer) { }
  register(user) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/users`, user);
  }
  getAllUser() {
    return this.httpClient.get(`${environment.apiUrl}/api/users.json`);
  }
  getAllAdmin() {
    return this.httpClient.get(`${environment.apiUrl}/api/users`);
  }
  getAllCaissier() {
    return this.httpClient.get(`${environment.apiUrl}/api/caissier`);
  }
  getAllPartenaire() {
    return this.httpClient.get(`${environment.apiUrl}/api/partenaires`);
  }
  getStatus(id: number) {
  return this.httpClient.get(`${environment.apiUrl}/api/users/status/${id}`);
  }
}
