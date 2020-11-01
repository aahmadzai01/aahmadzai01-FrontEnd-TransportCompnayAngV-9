import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserD } from 'src/app/Models/userd';
import { UserDService } from 'src/app/Service/user-d.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
 userdetails: UserD[]=[]
  getUrl: any;
  constructor(private _userDService: UserDService,
    private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._userDService.getUser().subscribe(data => this.userdetails=data)
  }

  getUser(id:number):Observable<UserD>{
   return this._httpClient.get<UserD>(`${this.getUrl}/${id}`).pipe(map(response =>response))

  }
}
