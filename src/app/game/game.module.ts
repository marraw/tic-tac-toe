import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { WinnerAlertComponent } from './winner-alert/winner-alert.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent,
    WinnerAlertComponent,
    ScoreComponent,
  ],
  imports: [GameRoutingModule, SharedModule],
})
export class GameModule {}
