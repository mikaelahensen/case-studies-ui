import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  contentfulUrl: string;

  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.contentfulUrl = 'https://sogeti-case-studies.herokuapp.com/case-studies';
    return this.http.get<any>(this.contentfulUrl, httpOptions);
  }
}

