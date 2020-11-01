import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContinerAbass } from '../Models/ContinerAbass';

@Injectable({
  providedIn: 'root'
})
export class ContinerAbassService {

private getUrl:string = "http://localhost:8089/api/v1/aport";

  constructor( private _httpClient:HttpClient) { }
  getAbass():Observable<ContinerAbass[]>{
    return this._httpClient.get<ContinerAbass[]>(this.getUrl).pipe(
      map(response =>response)
    )
  }

  saveAbass(continerAbass:ContinerAbass):Observable<ContinerAbass>{
    return this._httpClient.post<ContinerAbass>(this.getUrl,continerAbass);
  }
  getABports(id:number):Observable<ContinerAbass>{
    return this._httpClient.get<ContinerAbass>(`${this.getUrl}/${id}`).pipe(
      map(response =>response)
    )
  }
  deleteAbs(id:number):Observable<any>{
    return this._httpClient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
  }

  

}
