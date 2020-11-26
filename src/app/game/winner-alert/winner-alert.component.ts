import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-winner-alert',
  templateUrl: './winner-alert.component.html',
  styleUrls: ['./winner-alert.component.scss'],
})
export class WinnerAlertComponent {
  @Input() winner?: string;
  @Output() playAgain = new EventEmitter();

  constructor() {}

  playButton(): void {
    this.playAgain.emit();
  }
}
