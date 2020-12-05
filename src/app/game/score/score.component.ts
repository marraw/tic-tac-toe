import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit, OnDestroy {
  score!: number[];

  getScore!: Subscription;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getScore = this.gameService.gameEnd.subscribe((newScore) => {
      this.score = newScore;
    });
  }

  ngOnDestroy(): void {
    this.getScore.unsubscribe();
  }
}
