import React from 'react';
import Display from './Display';
import Start from './Start';
import Matrix from "./Matrix";
import { createMatrix } from '../Structure';

const Game = () => {
  return (
    <div>
      <Matrix matrix = { createMatrix() } />
      <aside>
        <div>
          <Display text = "Score" />
          <Display text = "Rows" />
          <Display text = "Level" />
        </div>
        <Start />
      </aside>
    </div>
  );
};

export default Game;