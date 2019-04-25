import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/Http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: Http) { }

  public getUsers(): Observable<Response> {

    const headers = new Headers();

    headers.append('Content-type', 'application/x-www-form-urlencoded');
    headers.append('token', sessionStorage.getItem('token'));

    return this.http.get('http://cesi.cleverapps.io/users', { headers: headers });
  }
}
