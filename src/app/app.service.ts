import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(email:any,password:any){
    return this.httpClient.post(`${environment.USER_API}/user/login`,{email:email,password:password});
  }
}