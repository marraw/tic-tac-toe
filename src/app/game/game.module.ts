import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { WinnerAlertComponent } from './winner-alert/winner-alert.component';

@NgModule({
  declarations: [BoardComponent, SquareComponent, WinnerAlertComponent],
  imports: [SharedModule],
  exports: [BoardComponent, SquareComponent],
})
export class GameModule {}
