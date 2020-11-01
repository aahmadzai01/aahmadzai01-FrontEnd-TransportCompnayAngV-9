import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbassAddlistComponent } from './Comonene/abass-addlist/abass-addlist.component';
import { AbassListComponent } from './Comonene/abass-list/abass-list.component';
import { HairatanListComponent } from './Comonene/hairatan-list/hairatan-list.component';
import { MainpageComponent } from './Comonene/mainpage/mainpage.component';
import { IstanbulListComponent } from './Comonent/istanbul-list/istanbul-list.component';
import { KarchiListComponent } from './Comonent/karchi-list/karchi-list.component';
import { ListUsersComponent } from './Comonent/list-users/list-users.component';


const routes: Routes = [
  {path:'mainpage', component:MainpageComponent},
  {path:'list-users', component:ListUsersComponent},
  {path:'abasslist', component: AbassListComponent},
  {path:'AddAbass/:id', component: AbassAddlistComponent},
  {path:'AddAbass', component: AbassAddlistComponent},
  {path:'hairatanlist', component:HairatanListComponent},
  {path:'istanbullist', component:IstanbulListComponent},
  {path:'karchipoer', component:KarchiListComponent},
  {path:'',redirectTo:'mainpage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
