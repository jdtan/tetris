import React, { useState } from 'react';
import Display from './Display';
import Start from './Start';
import Matrix from './Matrix';
import { createMatrix, checkCollision } from '../Structure';
import { StyledGameComponent, StyledGame } from './styles/StyledGame';

// Custom hooks
import { usePlayer } from '../hooks/usePlayer';
import { useMatrix } from '../hooks/useMatrix';

const Game = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Player Object
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [matrix, setMatrix] = useMatrix(player, resetPlayer);

  const movePlayer = dir => {
    if (!checkCollision(player, matrix, {x:dir, y:0})) {
      updatePlayerPos({
        x: dir,
        y: 0
      });
    }
  }

  const startGame = () => {
    // reset
    setMatrix(createMatrix());
    resetPlayer();
    setGameOver(false)
  }

  const drop = () => {
    if (!checkCollision(player, matrix, {x: 0, y: 1})) {
      updatePlayerPos({
        x: 0,
        y: 1,
        collided: false
      })      
    }
    else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({x:0, y:0, collided: true});
    }
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
      } else if (keyCode === 38) { // up arrow (rotate)
        playerRotate(matrix, 1);
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
          <Start callback={ startGame } />
        </aside>

      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
