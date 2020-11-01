import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HairatanPort } from '../Models/HairatanPort';

@Injectable({
  providedIn: 'root'
})
export class HairatanPortService {
  private getUrl:string='http://localhost:8089/api/v1/hport';

  constructor(private _httpClient:HttpClient) { }
getHiratan():Observable<HairatanPort[]>{
  return this._httpClient.get<HairatanPort[]>(this.getUrl).pipe(
    map(response =>response))
}

saveHair(hairatanPort:HairatanPort):Observable<HairatanPort>{
  return this._httpClient.post<HairatanPort>(this.getUrl,hairatanPort);
}

getHair(id:number):Observable<HairatanPort>{
  return this._httpClient.get<HairatanPort>(`${this.getUrl}/${id}`).pipe(
    map(response=>response)
  )
}

deleteHair(id:number):Observable<any>{
  return this._httpClient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
}



}
