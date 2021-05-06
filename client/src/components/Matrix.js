import React from 'react';
import { StyledMatrix } from './styles/StyledMatrix';

import Cell from './Cell';

const Matrix = ({ matrix }) => (
  <StyledMatrix width={matrix[0].length} height={matrix.length}>
    {matrix.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledMatrix>
);

export default Matrix;
