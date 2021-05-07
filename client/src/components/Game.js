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
  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [matrix, setMatrix] = useMatrix(player, resetPlayer);

  const movePlayer = dir => {
    updatePlayerPos({
      x: dir,
      y: 0
    })
  }

  const startGame = () => {
    // reset
    setMatrix(createMatrix());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({
      x: 0,
      y: 1,
      collided: false
    })
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) { // left arrow
        movePlayer(-1);
      }
      else if (keyCode === 39) { // right arrow
        movePlayer(1);
      }
      else if (keyCode === 40) { // down arrow
        dropPlayer();
      }
    }
  }

  return (
    <StyledGameComponent
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
    >
      <StyledGame>
        <Matrix matrix={matrix} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="HOLD" />
              <Display text="SCORE" />
              <Display text="ROWS" />
              <Display text="LEVEL" />
            </div>
          )}
          <Start onClick={ startGame } />
        </aside>

      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
