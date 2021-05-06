import React from 'react';
import Display from './Display';
import Start from './Start';
import Matrix from './Matrix';
import { createMatrix } from '../Structure';
import { StyledGameComponent, StyledGame } from './styles/StyledGame';

const Game = () => {
  return (
    <StyledGameComponent>
      <StyledGame>
        <Matrix matrix={createMatrix()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <Start />
        </aside>
      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
