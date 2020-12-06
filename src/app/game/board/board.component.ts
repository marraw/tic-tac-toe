import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  playerHand!: 'X' | 'O';
  aiMoving = false;
  winner = '';
  gameMode!: 'friend' | 'ai';

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.newGame();
    this.gameMode = this.gameService.gameMode;
    if (this.gameMode === undefined) {
      this.router.navigate(['']);
    }
  }

  newGame(): void {
    this.board = Array(9).fill('');
    this.winner = '';
    this.aiMoving = false;
    this.playerHand = 'X';
  }

  playerMove(i: number): void {
    if (this.aiMoving === false && this.winner === '') {
      if (this.board[i] === '') {
        this.board[i] = this.playerHand;
        this.calculateWinner();

        if (
          this.board.filter((square) => {
            return square === '';
          }).length > 0
        ) {
          if (this.playerHand === 'X') {
            this.playerHand = 'O';
          } else {
            this.playerHand = 'X';
          }

          if (this.gameMode === 'ai') {
            this.aiMoving = true;
            setTimeout(() => {
              this.aiMove();
            }, 400);
          }
        }
      }
    }
  }

  aiMove(): void {
    if (this.winner === '') {
      const i = Number((Math.random() * 9).toFixed());
      if (this.board[i] === '') {
        this.board[i] = this.playerHand;
        this.calculateWinner();
        this.aiMoving = false;
        this.playerHand = 'X';
      } else {
        this.aiMove();
      }
    }
  }

  calculateWinner(): void {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const moves = this.board.filter((move) => {
      return move === '';
    });

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
        this.gameService.updateScore(this.winner);
      } else if (moves.length === 0 && this.winner === '') {
        this.winner = 'draw';
      }
    }
  }
}
