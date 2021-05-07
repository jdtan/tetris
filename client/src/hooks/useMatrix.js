import { useState } from 'react';
import { createMatrix } from '../Structure';

export const useMatrix = () => {
  const [matrix, setMatrix] = useState(createMatrix());
  return [matrix, setMatrix];
};
