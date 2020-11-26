import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  get index(): number {
    return Number((Math.random() * 9).toFixed());
  }

  ngOnInit(): void {
    this.newGame();
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

        if (
          this.board.filter((square) => {
            return square === '';
          }).length > 0
        ) {
          this.aiMoving = true;
          setTimeout(() => {
            this.playerHand = 'O';
            this.aiMove();
          }, 400);
        }
      }
    }
    this.calculateWinner();
  }

  aiMove(): void {
    if (this.winner === '') {
      let i = this.index;
      if (this.board[i] === '') {
        this.board[i] = this.playerHand;
        this.aiMoving = false;
        this.playerHand = 'X';
      } else {
        this.aiMove();
      }
    }
    this.calculateWinner();
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.board[a];
      }
    }
  }
}
