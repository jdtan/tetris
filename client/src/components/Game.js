import React, { useState } from 'react';
import Display from './Display';
import Start from './Start';
import Matrix from './Matrix';
import { createMatrix, checkCollision } from '../Structure';
import { StyledGameComponent, StyledGame } from './styles/StyledGame';

// Custom hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useMatrix } from '../hooks/useMatrix';
import { useGameStatus } from '../hooks/useGameStatus';

const Game = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Player Object
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [matrix, setMatrix, rowsCleared] = useMatrix(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    if (!checkCollision(player, matrix, { x: dir, y: 0 })) {
      updatePlayerPos({
        x: dir,
        y: 0,
      });
    }
  };

  const startGame = () => {
    // reset
    setMatrix(createMatrix());
    // Timer for drop interval (Lower the value for higher level)
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      // Experimental
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, matrix, { x: 0, y: 1 })) {
      updatePlayerPos({
        x: 0,
        y: 1,
        collided: false,
      });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        // left arrow
        movePlayer(-1);
      } else if (keyCode === 39) {
        // right arrow
        movePlayer(1);
      } else if (keyCode === 40) {
        // down arrow
        dropPlayer();
      } else if (keyCode === 38) {
        // up arrow (rotate)
        playerRotate(matrix, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledGameComponent
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledGame>
        <Matrix matrix={matrix} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="HOLD" />
              <Display text={`SCORE: ${score}`} />
              <Display text={`ROWS: ${rows}`} />
              <Display text={`LEVEL: ${level}`} />
            </div>
          )}
          <Start callback={startGame} />
        </aside>
      </StyledGame>
    </StyledGameComponent>
  );
};

export default Game;
