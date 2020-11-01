import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinerAbass } from 'src/app/Models/ContinerAbass';
import { ContinerAbassService } from 'src/app/Service/continer-abass.service';

@Component({
  selector: 'app-abass-addlist',
  templateUrl: './abass-addlist.component.html',
  styleUrls: ['./abass-addlist.component.css']
})
export class AbassAddlistComponent implements OnInit {

  cab:ContinerAbass= new ContinerAbass();
  constructor( private continerAbassService:ContinerAbassService,
    private router:Router,
    private activatedRourt:ActivatedRoute) { }

  ngOnInit(): void {
    const isIdpresent = this.activatedRourt.snapshot.paramMap.has('id');
    if(isIdpresent){
      const id = +this.activatedRourt.snapshot.paramMap.get('id');
      this.continerAbassService.getABports(id).subscribe(
        data=>this.cab=data
      )
    }
    
  }
 
  saveAbass(){
    this.continerAbassService.saveAbass(this.cab).subscribe(
      data=>{
        console.log('response',data);
        this.router.navigateByUrl('/abasslist')
      }
    )
  }
  deleteAbs(id:number){
    this.continerAbassService.deleteAbs(id).subscribe(
      data =>{
        console.log('delete response',data);
        this.router.navigateByUrl('/abasslist');
      }
    )
  }

}
