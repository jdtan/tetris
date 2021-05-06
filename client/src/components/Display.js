import React from 'react';
import { StyledInfo } from './styles/StyledInfo';

const Display = ({ gameOver, text }) => (
  <StyledInfo gameOver={gameOver}>{text}</StyledInfo>
);

export default Display;
