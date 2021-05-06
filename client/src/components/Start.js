import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const Start = ({ callback }) => (
  <StyledStartButton onClick={callback}>START TETRIS</StyledStartButton>
);

export default Start;
