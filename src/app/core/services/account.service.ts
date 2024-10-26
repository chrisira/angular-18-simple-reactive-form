import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  loginUser(values: any) {
    console.log(values);
    return this.http.post(this.baseUrl + 'account/login', values);
  }
}
