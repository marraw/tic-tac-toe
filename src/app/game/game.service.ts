import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  score = [0, 0];
  gameEnd = new Subject<number[]>();

  updateScore(winner: string): void {
    if (winner === 'X') {
      this.score[0]++;
    } else if (winner === 'O') {
      this.score[1]++;
    }
    this.gameEnd.next(this.score);
  }
}
