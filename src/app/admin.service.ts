import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producttype } from './producttype';
import { Salesitem } from './salesitem';
import { Salesperson } from './salesperson';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) { }

  addSalesperson(salesperson: Salesperson): Observable<Salesperson>{
    return this.httpClient.post(`${"http://localhost:8080/persons"}`, salesperson);
  }

  getSalespersonList(): Observable<Salesperson[]>{
    return this.httpClient.get<Salesperson[]>(`${"http://localhost:8080/persons"}`);
  }

  addSales(saleitem: Salesitem): Observable<Object>{
    return this.httpClient.post(`${"http://localhost:8080/salesline"}`, saleitem);
  }

  getSales(): Observable<Salesitem[]>{
    return this.httpClient.get<Salesitem[]>(`${"http://localhost:8080/salesline"}`);
  }

  getProductTypes(): Observable<Producttype[]>{
    return this.httpClient.get<Producttype[]>(`${"http://localhost:8080/type"}`);
  }

  updateProductType(producttype: Producttype): Observable<Producttype>{
    return this.httpClient.put<Producttype>(`${"http://localhost:8080/type"}`, producttype);
  }

  addCsv(formData:FormData):Observable<any>{
    return this.httpClient.post<any>(`${"http://localhost:8080/salesline/upload"}`, formData);
  }

}

