import React, { useState } from 'react';
import styled from 'styled-components';
import { BoardContainer, Board, StartScreen, ResetScreen } from './components';
import { Winner } from './components/Board';

type GameState = 'start' | 'game' | 'reset';

const Header = styled.h1`
  color: #fff;
  margin-bottom: 50px;
  text-align: center;
  font-family: 'Varela Round';
  font-size: 4rem;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
`;

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
