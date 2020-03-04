import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient: HttpClient) { }

  create(compte) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/comptes`, compte);
  }

  getAllCompte() {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/comptes.json`);
  }
}
