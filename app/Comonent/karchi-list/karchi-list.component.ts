import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KarachiPort } from 'src/app/Models/KarachiPort';
import { KarachiPortService } from 'src/app/Service/karachi-port.service';

@Component({
  selector: 'app-karchi-list',
  templateUrl: './karchi-list.component.html',
  styleUrls: ['./karchi-list.component.css']
})
export class KarchiListComponent implements OnInit {
  KarachiPorts: KarachiPort[]=[];
  constructor(private _httpClient:HttpClient,
    private karachiPortService:KarachiPortService) { }

  ngOnInit(): void {
    this.karachiPortService.getKar().subscribe(
      data => this.KarachiPorts = data
    )
  }

}
