import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HairatanPort } from 'src/app/Models/HairatanPort';
import { HairatanPortService } from 'src/app/Service/hairatan-port.service';

@Component({
  selector: 'app-hairatan-list',
  templateUrl: './hairatan-list.component.html',
  styleUrls: ['./hairatan-list.component.css']
})

export class HairatanListComponent implements OnInit {
  //!!!!!!!
  HairatanPorts: HairatanPort[]=[];
  constructor(private _httpClient:HttpClient,
    private hairatanPortService:HairatanPortService) { }

  ngOnInit(): void {
    //!!!
   this.hairatanPortService.getHiratan().subscribe(
     data=>this.HairatanPorts =data
   )
  }

}
