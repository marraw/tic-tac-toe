import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: string[] = [];
  nextPlayer!: boolean;
  winner?: string;

  constructor() {}

  get playerHand(): 'X' | 'O' {
    return this.nextPlayer ? 'X' : 'O';
  }

  ngOnInit(): void {
    this.emptyBoard();
  }

  emptyBoard(): void {
    this.board = Array(9).fill('');
  }

  playerMove(i: number): void {
    if (this.winner !== undefined) {
      return;
    }
    if (this.board[i] === '') {
      this.board[i] = this.playerHand;
      this.nextPlayer = !this.nextPlayer;
    } else {
      return;
    }
    this.winner = this.calculateWinner();
    console.log(this.board);
  }

  calculateWinner(): string | undefined {
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
        return this.board[a];
      }
    }
    return;
  }
}
