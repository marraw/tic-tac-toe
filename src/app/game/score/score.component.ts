import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit, OnDestroy {
  score!: number[];
  gameMode!: 'friend' | 'ai';

  getScore!: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameMode = this.gameService.gameMode;
    this.score = [0, 0];
    this.getScore = this.gameService.winnerScore.subscribe((score) => {
      this.score = score;
    });
  }

  ngOnDestroy(): void {
    this.gameService.score = [0, 0];
    this.getScore.unsubscribe();
  }
}
