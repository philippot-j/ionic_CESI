import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupsService {

  constructor(public http: Http) { }

  public doSignup(username: string, password: string): Observable<Response> {
    let params = 'username=' + username;
    params = params + '&pwd=' + password;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://cesi.cleverapps.io/signup', params, { headers: headers });
  }
}
