import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private httpClient: HttpClient) { }

  depots(depot) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/depots`, depot);
  }

  getAllDepot() {
    return this.httpClient.get(`${environment.apiUrl}/api/depots`);
  }
  searchByNumeroCompte(numeroCompte) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/comptes?numeroCompte=${numeroCompte}`);
  }
}
