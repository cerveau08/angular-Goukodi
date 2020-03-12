import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PartenaireExistant } from '../models/partenaire-existant';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private httpClient: HttpClient) { }

  create(compte) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/comptes`, compte);
  }

  createE(partenaireExistant) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/comptes`, partenaireExistant);
  }

  getAllCompte() {
    return this.httpClient.get(`${environment.apiUrl}/api/comptes`);
  }
}
