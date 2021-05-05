import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChuckService {
  apiURLTot = "https://api.keyvalue.xyz/0e1f160e/myKey";
  apiURL: string = "https://api.keyvalue.xyz/";
  apiKey: string = "0e1f160e";
  apiEnd: string = "/myKey";

  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    return this.http.get(this.apiURLTot);
  }

  public postData(obj: Object): Observable<Object> {
    return this.http.post(this.apiURLTot, obj);
  }
}
