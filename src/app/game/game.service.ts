import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  score = [0, 0];
  gameEnd = new BehaviorSubject<number[]>(this.score);

  updateScore(winner: string): void {
    if (winner === 'X') {
      this.score[0] = this.score[0] + 1;
    } else if (winner === 'O') {
      this.score[1] = this.score[1] + 1;
    }
    this.gameEnd.next(this.score);
  }
}
