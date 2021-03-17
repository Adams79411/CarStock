import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarstockService {

  constructor(private httpClient: HttpClient) { }

  getCarData(): Observable<any> {
    return this.httpClient.get("assets/query_results.json");
  }
}
