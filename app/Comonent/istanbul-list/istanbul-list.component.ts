import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IstanbulPort } from 'src/app/Models/IstanbulPort';
import { IstanbulPortService } from 'src/app/Service/istanbul-port.service';

@Component({
  selector: 'app-istanbul-list',
  templateUrl: './istanbul-list.component.html',
  styleUrls: ['./istanbul-list.component.css']
})
export class IstanbulListComponent implements OnInit {
  IstanbulPorts:IstanbulPort[]=[];
  constructor(private _httpClient:HttpClient,
    private istanbulPortService:IstanbulPortService) { }

  ngOnInit(): void {
    this.istanbulPortService.getIst().subscribe(
      data => this.IstanbulPorts=data 
    )

  }

}
