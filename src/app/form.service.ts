import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuoteRequestBody } from './modal/quoterequest';




@Injectable ({
  providedIn: 'root'
})

export class FormService {
  uri = 'http://localhost:4000';
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 };
 constructor(private http: HttpClient) {
 }
 GetQuoteForm(getFormRequest: QuoteRequestBody): Observable<any> {
   return this.http.post<any>(`http://localhost:4000/quoteForm`, getFormRequest, this.httpOptions);
 }
}
