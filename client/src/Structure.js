export const MATRIX_WIDTH = 12;
export const MATRIX_HEIGHT = 20;

export const createMatrix = () =>
  Array.from(Array(MATRIX_HEIGHT), () =>
    new Array(MATRIX_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, matrix, {x: moveX, y: moveY}) => {
  for (let y=0; y<player.tetromino.length; y+=1) {
    for (let x=0; x<player.tetromino[y].length; x+=1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          (!matrix[y + player.pos.y + moveY]) ||
          (!matrix[y + player.pos.y + moveY][x + player.pos.x + moveX]) ||
          (matrix[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear')
        ) {
          return true;
        }
      }
    }
  }
}