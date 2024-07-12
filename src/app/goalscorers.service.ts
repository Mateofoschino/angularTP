import { Injectable } from '@angular/core';
import { Player } from './player-list/player';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalscorersService {

  private _playersSelected: Player[] = [];
  playersSelected: BehaviorSubject<Player[]> = new BehaviorSubject(this._playersSelected);

  constructor() { }

  addToGoalscorers(player: Player) {
    let p: Player | undefined = this._playersSelected.find((v1) =>v1.name == player.name)
    if (!p) {
      this._playersSelected.push({... player});
    } else {
      p.PJ += player.PJ;
    }
    
    console.log(this._playersSelected);
    this.playersSelected.next(this._playersSelected);
  }

  
}
