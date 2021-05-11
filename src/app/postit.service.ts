import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { postIt } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  apiKey: string = '';
  apiURL: string = 'https://api.keyvalue.xyz//myKey';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  public postData(obj: Object): Observable<any> {
    return this.http.post(this.apiURL, obj);
  }

  public Key() {
    return this.http.post('https://api.keyvalue.xyz/new/myKey', '', {
      responseType: 'text'
    });
  }
}
