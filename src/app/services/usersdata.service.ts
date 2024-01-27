import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string ="http://upskilling-egypt.com:3001/contact"

  UserData(usersData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl, usersData );
  }


}
