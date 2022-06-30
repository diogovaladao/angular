import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  /* método que salva as informações na base de dados */
    createMoment(formatDate: FormData): Observable<FormData> {
      return this.http.post<FormData>(this.apiUrl, formatDate);
  }
}
