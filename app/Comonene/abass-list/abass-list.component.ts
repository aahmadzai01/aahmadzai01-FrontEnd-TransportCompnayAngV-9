import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContinerAbass } from 'src/app/Models/ContinerAbass';
import { ContinerAbassService } from 'src/app/Service/continer-abass.service';

@Component({
  selector: 'app-abass-list',
  templateUrl: './abass-list.component.html',
  styleUrls: ['./abass-list.component.css']
})
export class AbassListComponent implements OnInit {
  ContinerAb:ContinerAbass[]=[];
  constructor(private continerAbassService:ContinerAbassService,
    private _httpCleint:HttpClient,
    private activatedRourt:ActivatedRoute) { }

  ngOnInit(): void {
   this.listabsPort();
  }

  listabsPort(){
    this.continerAbassService.getAbass().subscribe(
      data => this.ContinerAb=data
    )
  }
  deleteAbs(id:number){
    this.continerAbassService.deleteAbs(id).subscribe(
      data =>{
        console.log('delete response',data);
      this.listabsPort();
      }
    )
  }


}
