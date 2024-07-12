import { Component } from '@angular/core';
import { Player } from './player';
import { GoalscorersService } from '../goalscorers.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {

  constructor(private goalscorers: GoalscorersService) {
  }
    
  players: Player[] = [
    {
      "name":"Lamine",
      "surname":"Yamal",
      "team":"España",
      "goals":5,
      "titularity": false,
      "PJ": 0
    },
    {
      "name":"Fermin",
      "surname":"Lopez",
      "team":"España",
      "goals":9,
      "titularity": true,
      "PJ": 0
    },
    {
      "name":"Jude",
      "surname":"Bellingham",
      "team":"Inglaterra",
      "goals":18,
      "titularity": false,
      "PJ": 0
    },
    {
      "name":"Georges",
      "surname":"Mikautadze",
      "team":"Georgia",
      "goals":11,
      "titularity": false,
      "PJ": 0
    }
  ]

  addToGoalscorers(player: Player): void {

    this.goalscorers.addToGoalscorers(player);
  }
  
}
