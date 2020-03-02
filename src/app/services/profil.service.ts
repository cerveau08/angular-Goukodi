import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private httpClient: HttpClient) {}
  getRoles() {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/profils.json`);
  }
}
