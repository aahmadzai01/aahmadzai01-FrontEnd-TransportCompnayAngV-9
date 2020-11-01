import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KarachiPort } from 'src/app/Models/KarachiPort';
import { KarachiPortService } from 'src/app/Service/karachi-port.service';

@Component({
  selector: 'app-karchi-addlist',
  templateUrl: './karchi-addlist.component.html',
  styleUrls: ['./karchi-addlist.component.css']
})
export class KarchiAddlistComponent implements OnInit {
  KARport:KarachiPort=new KarachiPort();
  constructor(private karachiPortService:KarachiPortService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveKar(){
    this.karachiPortService.saveKar(this.KARport).subscribe(
   data=>{
     console.log('response',data);
     this.router.navigateByUrl('/xxxxxxxxxx');
   } )

  }
 
  deleteKar(id:number){
    this.karachiPortService.deleteKar(id).subscribe(
      data=>{
        console.log('delete response',data);
        this.router.navigateByUrl('/xxxxxxxxxxxx');
      })

  } 
  
}
