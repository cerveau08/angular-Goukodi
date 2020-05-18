import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }
  transactions(transaction) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/transactions`, transaction);
  }
  getAllTarifs() {
    return this.httpClient.get(`${environment.apiUrl}/api/tarifs.json`);
  }
  putquotaE(idE) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/quotaE`, idE);
  }
  putquotaR(idR) {
    return this.httpClient.put<any>(`${environment.apiUrl}/api/quotaR`, idR);
  }
  getquotaE(idE) {
    return this.httpClient.get(`${environment.apiUrl}/api/quotasE`, idE);
  }
  getquotaR(idE) {
    return this.httpClient.get(`${environment.apiUrl}/api/quotasR`, idE);
  }
}
