import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfootballPlayersComponent} from "./ifootball-players/ifootball-players.component";
import { IfootballAboutComponent } from "./ifootball-about/ifootball-about.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full',
  },
  {
    path: 'players',
    component: IfootballPlayersComponent,
  },
  {
    path: 'about',
    component: IfootballAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
