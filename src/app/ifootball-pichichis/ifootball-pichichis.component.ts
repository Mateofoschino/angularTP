import { Component } from '@angular/core';
import { GoalscorersService } from '../goalscorers.service';
import { Player } from '../player-list/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ifootball-pichichis',
  templateUrl: './ifootball-pichichis.component.html',
  styleUrl: './ifootball-pichichis.component.scss'
})
export class IfootballPichichisComponent {

  pichichis$: Observable<Player[]>;
  constructor(private goalscorers: GoalscorersService) {
    this.pichichis$ = goalscorers.playersSelected.asObservable();
  }
  
}
