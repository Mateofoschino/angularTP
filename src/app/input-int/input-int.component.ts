import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Player } from "../player-list/player";

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrl: './input-int.component.scss'
})
export class InputIntComponent {

  @Input()
  value!: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();

  upPJ(): void {
    this.value++
    this.valueChange.emit(this.value);
  }

  downPJ(): void {
    if (this.value>0) {
      this.value--
      this.valueChange.emit(this.value);
    }
   
  }
}

