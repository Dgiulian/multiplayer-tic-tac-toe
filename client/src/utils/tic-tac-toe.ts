export type BoardState = string | null;
export type Player = 'x' | 'o';
export type CellValue = Player | null;
export type Winner = CellValue | 'tie';

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState: CellValue[] = Array(9).fill(null);

export class TicTacToe {
  cells: CellValue[];
  currentPlayer: CellValue;

  constructor() {
    this.cells = initialState;
    this.currentPlayer = 'x';
  }
  checkWinner(player: Player): CellValue {
    const winner = winningConditions.find((cond) => {
      const line = cond.map((cellIndex) => this.cells[cellIndex]);
      return line.every((value) => value === player);
    });
    return winner ? player : null;
  }
  checkTie() {
    return this.cells.filter(Boolean).length === this.cells.length;
  }
  makeMove(index: number, currentPlayer: Player): CellValue[] {
    if (this.cells[index]) {
      return this.cells;
    }
    const newCells = [...this.cells];
    newCells[index] = currentPlayer;
    return newCells;
  }
  nextPlayer(prevPlayer: Player) {
    return prevPlayer === 'x' ? 'o' : 'x';
  }
}
