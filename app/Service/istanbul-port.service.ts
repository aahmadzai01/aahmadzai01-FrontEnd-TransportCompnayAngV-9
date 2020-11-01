import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IstanbulPort } from '../Models/IstanbulPort';

@Injectable({
  providedIn: 'root'
})
export class IstanbulPortService {
private getUrl:string='http://localhost:8089/api/v1/iport'
  constructor(private _httpClient:HttpClient) { }
  getIst():Observable<IstanbulPort[]>{
    return this._httpClient.get<IstanbulPort[]>(this.getUrl).pipe(
      map(response =>response)
    )
  }

saveIst(istanbulPort:IstanbulPort):Observable<IstanbulPort>{
  return this._httpClient.post<IstanbulPort>(this.getUrl,istanbulPort);
}

getIstById(id:number):Observable<IstanbulPort>{
  return this._httpClient.get<IstanbulPort>(`${this.getUrl}/${id}`).pipe(
    map(response=>response)
  )
}
 
deleteIst(id:number):Observable<any>{
  return this._httpClient.delete(`${this.getUrl}/${id}`, { responseType: 'text' });
}
  

  
 
  
}
