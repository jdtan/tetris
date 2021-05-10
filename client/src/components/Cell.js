import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINO } from '../Tetromino';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINO[type].color}></StyledCell>
);

export default React.memo(Cell);
