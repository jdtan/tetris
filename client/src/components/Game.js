import React, { useState } from 'react';
import Display from './Display';
import Start from './Start';
import Matrix from './Matrix';
import { createMatrix } from '../Structure';
import { StyledGameComponent, StyledGame } from './styles/StyledGame';

// Custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useMatrix } from '../hooks/useMatrix';

const Game = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Player Object
  const [player] = usePlayer();
  const [matrix, setMatrix] = useMatrix(player);

  return (
    <StyledGameComponent>
      <StyledGame>
        <aside>
          {gameOver ? (
            <Display gmaeOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="HOLD" />
              <Display text="SCORE" />
              <Display text="ROWS" />
              <Display text="LEVEL" />
            </div>
          )}
          <Start />
        </aside>
        <Matrix matrix={matrix} />
      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
