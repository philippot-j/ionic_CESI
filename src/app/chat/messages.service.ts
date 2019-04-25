import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/Http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public http: Http) { }

  public getMessages(): Observable<Response> {

    const headers = new Headers();

    headers.append('Content-type', 'application/x-www-form-urlencoded');
    headers.append('token', sessionStorage.getItem('token'));

    return this.http.get('http://cesi.cleverapps.io/messages', { headers: headers });
  }


  public sendMsg(msg: string) {
    let params = 'message=' + msg;
    console.log(params);
    const headers = new Headers();

    headers.append('Content-type', 'application/x-www-form-urlencoded');
    headers.append('token', sessionStorage.getItem('token'));
    return this.http.post('http://cesi.cleverapps.io/messages', params, { headers: headers });
  }
}
