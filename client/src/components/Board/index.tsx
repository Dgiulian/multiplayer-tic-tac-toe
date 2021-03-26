import React, { useState } from 'react';
import Cell from '../Cell';
import BoardWrapper from './BoardWrapper';
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
const checkWinner = (cells: CellValue[], player: Player): CellValue => {
  const winner = winningConditions.find((cond) => {
    const line = cond.map((cellIndex) => cells[cellIndex]);
    return line.every((value) => value === player);
  });
  return winner ? player : null;
};
const checkTie = (cells: CellValue[]) =>
  cells.filter(Boolean).length === cells.length;

const makeMove = (
  cells: CellValue[],
  index: number,
  currentPlayer: Player
): CellValue[] => {
  if (cells[index]) {
    return cells;
  }
  const newCells = [...cells];
  newCells[index] = currentPlayer;
  return newCells;
};
const nextPlayer = (prevPlayer: Player) => (prevPlayer === 'x' ? 'o' : 'x');
interface BoardProps {
  onGameEnd(winner: Winner): void;
}
const Board: React.FunctionComponent<BoardProps> = ({
  onGameEnd,
}: BoardProps) => {
  const [cells, setCells] = useState<CellValue[]>(initialState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('x');
  const handleCellClick = (index: number) => {
    const newCells = makeMove(cells, index, currentPlayer);
    if (cells === newCells) {
      return;
    }
    setCells(newCells);
    const winner = checkWinner(newCells, currentPlayer);
    if (winner) {
      onGameEnd(winner);
    } else {
      const tie = checkTie(newCells);
      if (tie) {
        onGameEnd('tie');
      }
    }
    setCurrentPlayer(nextPlayer);
  };
  return (
    <BoardWrapper>
      {cells.map((cell: CellValue, idx: number) => (
        <Cell
          key={idx}
          onClick={handleCellClick}
          index={idx}
          value={cells[idx]}
        />
      ))}
    </BoardWrapper>
  );
};
export default Board;
