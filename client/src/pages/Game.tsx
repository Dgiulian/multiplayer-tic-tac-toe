import React from 'react';
import { SocketProvider } from '../context/socket';
import App from './App';

function Game() {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  );
}

export default Game;
