import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './pages/Game';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/game/:id" exact component={Game} />
      <Route path="/" exact component={Home} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
