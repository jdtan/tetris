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
            <Display text="SCORE" />
            <Display text="ROWS" />
            <Display text="LEVEL" />
          </div>
          <Start />
        </aside>
      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
