import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { useHistory } from 'react-router';

const Input = styled.input`
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  color: #fafafa;
  font-size: 1.2rem;
`;

function Home() {
  const [name, setName] = useState('');
  const history = useHistory();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    const id = '1AaSbF13ASlnKASD';
    history.push(`/game/${id}?player1=${name}`);
  };
  return (
    <div>
      <Header>
        Multiplayer
        <br /> Tic-Tac-Toe
      </Header>

      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ color: '#fafafa' }}>
          Enter your name to start a game
          <br />
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <Button type="submit" style={{ marginLeft: '0.25rem' }}>
          Start Game
        </Button>
      </form>
    </div>
  );
}

export default Home;
