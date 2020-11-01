import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './Comonent/list-users/list-users.component';
import { MainpageComponent } from './Comonene/mainpage/mainpage.component';
import { KarchiListComponent } from './Comonent/karchi-list/karchi-list.component';
import { KarchiAddlistComponent } from './Comonent/karchi-addlist/karchi-addlist.component';
import { IstanbulListComponent } from './Comonent/istanbul-list/istanbul-list.component';
import { IstanbulAddlistComponent } from './Comonent/istanbul-addlist/istanbul-addlist.component';
import { HairatanListComponent } from './Comonene/hairatan-list/hairatan-list.component';
import { HairatanAddlistComponent } from './Comonene/hairatan-addlist/hairatan-addlist.component';

import { AbassAddlistComponent } from './Comonene/abass-addlist/abass-addlist.component';
import { AbassListComponent } from './Comonene/abass-list/abass-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    MainpageComponent,
   
    KarchiListComponent,
    KarchiAddlistComponent,
    IstanbulListComponent,
    IstanbulAddlistComponent,
    HairatanListComponent,
    HairatanAddlistComponent,
    AbassListComponent,
    AbassAddlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
