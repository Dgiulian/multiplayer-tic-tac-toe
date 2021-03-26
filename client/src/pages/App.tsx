import React, { useState } from 'react';
import { BoardContainer, Board, StartScreen, ResetScreen } from '../components';
import { Winner } from '../components/Board';
import { Header } from '../components/Header';

type GameState = 'start' | 'game' | 'reset';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [winner, setWinner] = useState<Winner>('x');
  const handleStart = () => {
    setGameState('game');
    setWinner(null);
  };
  const handleReset = () => {
    setWinner(null);
    setGameState('game');
  };
  const handleGameEnd = (winner: Winner) => {
    setWinner(winner);
    setGameState('reset');
  };
  return (
    <div className="App">
      <Header>Tic-Tac-Toe</Header>
      <BoardContainer animate={gameState}>
        {gameState === 'start' && <StartScreen onStart={handleStart} />}

        {gameState === 'game' && <Board onGameEnd={handleGameEnd}></Board>}
        {gameState === 'reset' && (
          <ResetScreen winner={winner} onReset={handleReset} />
        )}
      </BoardContainer>
    </div>
  );
}
