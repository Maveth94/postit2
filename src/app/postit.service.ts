import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  //apiKey: string = '';
  apiURL: string = 'https://api.keyvalue.xyz/';

  constructor(private http: HttpClient) {}

  public getData(key: string): Observable<Object> {
    return this.http.get(this.apiURL + key + '/myKey');
  }

  public postData(obj: Object): Observable<Object> {
    return this.http.post(this.apiURL, obj);
  }

  /*
  public getData(CityName: string): Observable<Object> {
    return this.http.get(this.apiURL+'?key='+this.apiKEY+'&city='+CityName);
  }*/

  public Key() {
    return this.http.post('https://api.keyvalue.xyz/new/myKey', '', {
      responseType: 'text'
    });
  }
}
