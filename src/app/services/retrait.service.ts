import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  constructor(private httpClient: HttpClient) { }
  retraits(retrait) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/transactions`, retrait);
  }
}
