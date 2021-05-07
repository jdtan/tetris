import { useState } from 'react';

import { generateTetromino } from '../Tetromino';

// Returns a player object with initial position and
// Newly generated Tetromino shape
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: generateTetromino().shape,
    collided: false,
  });

  return [player];
};
