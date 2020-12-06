import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/game.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent {
  gameMode = false;

  constructor(private gameService: GameService) {}

  selectMode(mode: 'friend' | 'ai'): void {
    this.gameService.selectedMode(mode);
  }
}
