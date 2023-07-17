import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private _httpClient: HttpClient) { }


  // TODO: my local server rejects the post request because of the CORS thing.
  // Or I don't know how to configure the jakarta SeBootstrap to make it work.

  // Access to XMLHttpRequest at 'http://localhost:8080/rest/uppercase'
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //  Response to preflight request doesn't pass access control check: 
  //    No 'Access-Control-Allow-Origin' header is present on the requested resource.
  public getUppercase(obj:any): Observable<any> {
    return this._httpClient.post("http://localhost:8080/rest/uppercase", obj)
  }
}
