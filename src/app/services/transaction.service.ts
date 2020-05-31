import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
  private urlBack = 'http://127.0.0.1:8000';
  constructor(private httpClient: HttpClient) { }
  transactionS(transaction) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/transactions`, transaction);
  }
  transactions(data: any) {
    return this.postElement(data, '/api/transactions');
  }
  transactionsR(data: any) {
    return this.postElement(data, '/api/retrait');
  }
  getAllTarifs() {
    return this.httpClient.get(`${environment.apiUrl}/api/tarifs.json`);
  }
  getTransaction() {
    return this.httpClient.get(`${environment.apiUrl}/api/transaction`);
  }
  getEnvoi() {
    return this.httpClient.get(`${environment.apiUrl}/api/envoi`);
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
  postElement(data: any, url: string) {
    // return une promise
    return new Promise<any>(
      (resolve, reject) => {
      this.httpClient
        .post<any>(this.urlBack + url, data, this.headers).subscribe(
          rep => {
          resolve(rep);
          },
          error => {
            console.log('Erreur : ' + error.message);
            console.log(error.error.Erreur);
            reject(error);
          }
        );
      }
    );
  }
}
