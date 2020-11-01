import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HairatanPort } from 'src/app/Models/HairatanPort';
import { HairatanPortService } from 'src/app/Service/hairatan-port.service';

@Component({
  selector: 'app-hairatan-addlist',
  templateUrl: './hairatan-addlist.component.html',
  styleUrls: ['./hairatan-addlist.component.css']
})
export class HairatanAddlistComponent implements OnInit {
  hairP:HairatanPort = new HairatanPort();
  constructor(private router:Router,
    private activatedRouter:ActivatedRoute,
    private hairatanPortService:HairatanPortService) { }

  ngOnInit(): void {
  }

  saveHair(){
    this.hairatanPortService.saveHair(this.hairP).subscribe(
      data=>{
        console.log('response',data)
      }
    )
  }
  

  deleteHair(id:number){
    this.hairatanPortService.deleteHair(id).subscribe(data =>{
      console.log('delete response',data);
      this.router.navigateByUrl('XXXXXXX');
    })
  }
  
}
