import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesitem } from './salesitem';
import { Salesperson } from './salesperson';

@Injectable({
  providedIn: 'root'
})
export class SalespersonService {

  constructor(private httpClient: HttpClient) { }

  public getSalesByMonth(sid: number, month: String): Observable<Salesitem[]> {
    return this.httpClient.get<Salesitem[]>(`${"http://localhost:8080/salesline"}/${sid}/${month}`);
  }

  public getSalesById(sid: number): Observable<Salesitem[]> {
    return this.httpClient.get<Salesitem[]>(`${"http://localhost:8080/salesline"}/${sid}`);
  }

  public getSalespersonById(sid: number): Observable<Salesperson> {
    return this.httpClient.get<Salesperson>(`${"http://localhost:8080/persons"}/${sid}`);
  }

  public getTotalSalesByMonth(month: String, sid: number): Observable<number> {
    return this.httpClient.get<number>(`${"http://localhost:8080/salesline/total"}/${sid}/${month}`);
  }

}
