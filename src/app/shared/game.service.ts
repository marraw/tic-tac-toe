import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  score = [0, 0];
  winnerScore = new Subject<number[]>();

  gameMode!: 'friend' | 'ai';

  updateScore(winner: string): void {
    if (winner === 'X') {
      this.score[0]++;
    } else if (winner === 'O') {
      this.score[1]++;
    }
    this.winnerScore.next(this.score);
  }

  selectedMode(mode: 'friend' | 'ai'): void {
    this.gameMode = mode;
  }
}
