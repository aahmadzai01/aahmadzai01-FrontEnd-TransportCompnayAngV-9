import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserD } from '../Models/userd';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDService {
private getUrl:string= 'http://localhost:8089/api/v1/user';

  constructor(private _httpClient:HttpClient) { }
  getUser():Observable<UserD[]>{
    return this._httpClient.get<UserD[]>(this.getUrl).pipe(
      map(response => response)    
)
    
  }
}


