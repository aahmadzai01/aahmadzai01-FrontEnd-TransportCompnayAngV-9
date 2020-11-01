import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IstanbulPort } from 'src/app/Models/IstanbulPort';
import { IstanbulPortService } from 'src/app/Service/istanbul-port.service';

@Component({
  selector: 'app-istanbul-addlist',
  templateUrl: './istanbul-addlist.component.html',
  styleUrls: ['./istanbul-addlist.component.css']
})
export class IstanbulAddlistComponent implements OnInit {
ISTport:IstanbulPort = new IstanbulPort();
  constructor(private router:Router,
    private activatedRouter:ActivatedRoute,
    private istanbulPortService:IstanbulPortService) { }

  ngOnInit(): void {
  }

  saveIst(){
    this.istanbulPortService.saveIst(this.ISTport).subscribe(
      data=>{
        console.log('response',data);
        this.router.navigateByUrl('xxxxxxxxxxxx');
      }
    )
  }
  
  deleteIst(id:number){
    this.istanbulPortService.deleteIst(id).subscribe(
     data=>{
       console.log('delete response',data);
       this.router.navigateByUrl('/xxxxxxxxxxxxxx');
     }
    )

  }

 
}
