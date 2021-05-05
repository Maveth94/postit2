import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChuckService {
  apiURL: string = "https://api.keyvalue.xyz/0e1f160e/myKey";
  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    return this.http.get(this.apiURL);
  }

  public postData(obj: Object): Observable<Object> {
    return this.http.post(this.apiURL, obj);
  }
}
