import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import '../../../../clientPanel/src/server.js';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url: string = 'http://localhost:4200/send';
  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {

    console.log('in send message');
    return this.http.post(this.url,
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
