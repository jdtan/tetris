import { useState, useCallback } from 'react';

import { generateTetromino } from '../Tetromino';
import { MATRIX_WIDTH } from '../Structure';

// Returns a player object with initial position and
// Newly generated Tetromino shape
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: generateTetromino().shape,
    collided: false,
  });

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

  // const resetPlayer = () => {
  //
  // }

  return [player, updatePlayerPos, resetPlayer];
};
