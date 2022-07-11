import { Injectable } from '@angular/core';
import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  /**
   *  Salva as informações na base de dados 
   */
    createMoment(formatDate: FormData): Observable<FormData> {
      return this.http.post<FormData>(this.apiUrl, formatDate);
  }

  /**
   * Pega informações na base de dados 
   */ 
  getMoments():Observable<Response<Moment[]>>{
    return this.http.get<Response<Moment[]>>(this.apiUrl);
    
    }


    /** 
     * Pega momento de acordo com o ID
     */ 
    getMoment(id: number):Observable<Response<Moment>>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Response<Moment>>(url);
      
      }
    
}
