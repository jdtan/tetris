import { useState, useEffect } from 'react';
import { createMatrix } from '../Structure';

export const useMatrix = (player, resetPlayer) => {
  const [matrix, setMatrix] = useState(createMatrix());

  useEffect(() => {
    const updateMatrix = prevMatrix => {
      const newMatrix = prevMatrix.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            newMatrix[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      return newMatrix;
    };
    setMatrix(prev => updateMatrix(prev))
  }, [player]);

  return [matrix, setMatrix];
};
