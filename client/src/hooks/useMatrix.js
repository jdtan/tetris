import { useState, useEffect } from 'react';
import { createMatrix } from '../Structure';

export const useMatrix = (player, resetPlayer) => {
  const [matrix, setMatrix] = useState(createMatrix());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newMatrix =>
      newMatrix.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newMatrix[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, [])
      
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
      // check for collision
      if (player.collided) {
        resetPlayer();
      }

      return newMatrix;
    };
    setMatrix(prev => updateMatrix(prev))
  }, [player, resetPlayer]);

  return [matrix, setMatrix];
};
