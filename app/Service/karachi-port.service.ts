import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KarachiPort } from '../Models/KarachiPort';

@Injectable({
  providedIn: 'root'
})
export class KarachiPortService {

private getUrl:string='http://localhost:8089/api/v1/kport';

  constructor(private _httpClient:HttpClient) { }
getKar():Observable<KarachiPort[]>{
  return this._httpClient.get<KarachiPort[]>(this.getUrl).pipe(
    map(response => response)
  )
}

saveKar(karachiPort:KarachiPort):Observable<KarachiPort>{
  return this._httpClient.post<KarachiPort>(this.getUrl,karachiPort);
}

getKarbyId(id:number):Observable<KarachiPort>{
  return this._httpClient.get<KarachiPort>(`${this.getUrl}/${id}`).pipe(
    map(response=>response)
  )
}

deleteKar(id:number):Observable<any>{
  return this._httpClient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
}




}
