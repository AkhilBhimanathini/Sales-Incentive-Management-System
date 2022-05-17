import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salesperson } from './salesperson';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginData?: object;

  constructor( private httpClient: HttpClient ) { }

  public loginSalespersonFromRemote(salesperson: Salesperson):Observable<Salesperson> {
    // console.log(salesperson);
    return this.httpClient.post("http://localhost:8080/login", salesperson);
  }

}
