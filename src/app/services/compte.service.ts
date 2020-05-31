import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))};
  private urlBack = 'http://127.0.0.1:8000';
  constructor(private httpClient: HttpClient) { }

  create(compte) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/comptes`, compte);
  }
  creates(data: any) {
    return this.postElement(data, '/api/comptes');
  }
  getAllCompte() {
    return this.httpClient.get(`${environment.apiUrl}/api/compte`);
  }
  searchByNinea(ninea) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/partenaires?ninea=${ninea}`);
  }
  affecter(affectation) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/affectations`, affectation);
  }
  searchByDate(dates) {
    return this.httpClient.get(`${environment.apiUrl}/api/affect`, dates);
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
