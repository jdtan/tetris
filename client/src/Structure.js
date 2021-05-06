export const MATRIX_WIDTH = 12;
export const MATRIX_HEIGHT = 20;

export const createMatrix = () =>
  Array.from(Array(MATRIX_HEIGHT), () =>
    new Array(MATRIX_WIDTH).fill([0, 'clear'])
  )