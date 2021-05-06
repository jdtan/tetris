import React from 'react';
import Cell from './Cell';

const Matrix = ({ matrix }) => (
  <div>
    {matrix.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
)

export default Matrix;