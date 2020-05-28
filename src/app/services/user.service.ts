import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
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
  Image(user) {
    return this.sanitize.bypassSecurityTrustResourceUrl(`user:image/jpg:base64,${user.imageProfil}`);
  }
  findUserById(id: number) {
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users/${id}.json`);
  }
  updateUser( user: User, id: number) {
    return this.httpClient.put<User>(`${environment.apiUrl}/users/${id}`, user);
  }
  // function de telechargement du Profil Image

upload(imageProfil, id) {
  const headers = new HttpHeaders(
  {
  });

  return this.httpClient.post<User>(`${environment.apiUrl}/users/imageprofil/${id}`, imageProfil);
}

getThumbnail(user: User) {
  if (user.imageProfil) {
    const objectURL = 'user:image/jpg;base64,' + user.imageProfil;
    return this.sanitize.bypassSecurityTrustUrl(objectURL);
  } else {
    const objectURL = './assets/images/cerv.jpg';
    return this.sanitize.bypassSecurityTrustUrl(objectURL);
  }
// DomSanitizer aide à prévenir les bogues de sécurité de Cross Site Scripting (XSS)
// en filtrant les valeurs pour une utilisation sûre dans les différents contextes DOM.
 // return this.sanitize.bypassSecurityTrustUrl(objectURL);
}
}
