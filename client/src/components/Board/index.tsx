import React, { useState } from "react";
import Cell from "../Cell";
import BoardWrapper from "./BoardWrapper";

export type CellValue = "x" | "o" | null;
export type Winner = CellValue | "tie";

interface BoardProps {
  onGameEnd(winner: Winner): void;
}
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const checkWinner = (cells: CellValue[], player: CellValue): CellValue => {
  const winner = winningConditions.find((cond) => {
    const line = cond.map((cellIndex) => cells[cellIndex]);
    return line.every((value) => value === player);
  });
  return winner ? player : null;
};
const Board: React.FunctionComponent<BoardProps> = ({
  onGameEnd
}: BoardProps) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<CellValue>("x");
  const handleCellClick = (index: number) => {
    if (cells[index]) {
      return;
    }
    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    const winner = checkWinner(newCells, currentPlayer);
    if (winner) {
      onGameEnd(winner);
    } else {
      const tie = newCells.filter(Boolean).length === newCells.length;
      if (tie) {
        onGameEnd("tie");
      }
    }
    setCurrentPlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
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
