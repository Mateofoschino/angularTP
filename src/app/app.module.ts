import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';

import { FormsModule } from '@angular/forms';
import { IfootballAboutComponent } from './ifootball-about/ifootball-about.component';
import { IfootballPlayersComponent } from './ifootball-players/ifootball-players.component';
import { IfootballPichichisComponent } from './ifootball-pichichis/ifootball-pichichis.component';
import { InputIntComponent } from './input-int/input-int.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    IfootballAboutComponent,
    IfootballPlayersComponent,
    IfootballPichichisComponent,
    InputIntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
