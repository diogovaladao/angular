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
   * Pega momento de acordo com o ID informado
  */ 
  getMoment(id: number):Observable<Response<Moment>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);  
  }
      
  /**
  * Remove informações da base de dados de acrodo com o ID informado
  * @param id ID do momento selecionado
  * @return efetua a exclusão na base de dados
  */
  removeMoments(id: number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  /**
   * Atualiza informações na base de dados
   * @param id ID do momento selecionado
   * @param formatData conteúdo do momento selecionado
   * @return efetua a alteração na base de dados
   */
  updateMoment(id: number, formatData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formatData);
  }
}
