import React, { useReducer } from 'react';
import { Board, BoardContainer, ResetScreen, StartScreen } from '../components';
import { Winner } from '../components/Board';
import { Header } from '../components/Header';

interface GameState {
  state: 'start' | 'game' | 'reset';
  winner: Winner | null;
}
interface GameAction {
  type: 'GAME_START' | 'GAME_RESET' | 'GAME_END';
  payload?: Winner | null;
}

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'GAME_START':
      return { state: 'game', winner: null };
    case 'GAME_RESET':
      return { state: 'start', winner: null };
    case 'GAME_END':
      return { state: 'reset', winner: action.payload! };
    default:
      return state;
  }
};

export default function App() {
  const [gameState, dispatch] = useReducer(gameReducer, {
    state: 'start',
    winner: null,
  });
  const handleStart = () => {
    dispatch({ type: 'GAME_START' });
  };
  const handleReset = () => {
    dispatch({ type: 'GAME_RESET' });
  };
  const handleGameEnd = (winner: Winner) => {
    dispatch({ type: 'GAME_END', payload: winner });
  };
  return (
    <div className="App">
      <Header>Tic-Tac-Toe</Header>

      <BoardContainer animate={gameState.state}>
        {gameState.state === 'start' && <StartScreen onStart={handleStart} />}

        {gameState.state === 'game' && (
          <Board onGameEnd={handleGameEnd}></Board>
        )}
        {gameState.state === 'reset' && (
          <ResetScreen winner={gameState.winner} onReset={handleReset} />
        )}
      </BoardContainer>
    </div>
  );
}
