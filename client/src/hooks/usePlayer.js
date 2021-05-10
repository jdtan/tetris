import { useState, useCallback } from 'react';

import { generateTetromino, TETROMINO } from '../Tetromino';
import { MATRIX_WIDTH, checkCollision } from '../Structure';

// Returns a player object with initial position and
// Newly generated Tetromino shape
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINO[0].shape,
    collided: false,
  });

  // Newly added from LiveSession
  const rotate = (matrix, dir) => {
    // Transpose the rows into columns
    const rotatedTetro = matrix.map((_, index) => 
      matrix.map(col => col[index]),
    );

    // Reverse each row to get a rotated matrix
    if (dir > 0) {
      return rotatedTetro.map(row => row.reverse());
    }
    return rotatedTetro.reverse();
  }

  // Newly added from LiveSession
  const playerRotate = (matrix, dir) => {
    // Deep clone copy
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    // Logic to fix rotating outside the matrix
    // Save x position first
    const pos = clonedPlayer.pos.x;
    let offset = 1;

    // Collision / Rotation fix
    while(checkCollision(clonedPlayer, matrix, {x: 0, y:0})) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y)
      },
      collided,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: {
        x: MATRIX_WIDTH/2-2,
        y: 0
      },
      tetromino: generateTetromino().shape,
      collided: false,
    })
  }, [])


  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
