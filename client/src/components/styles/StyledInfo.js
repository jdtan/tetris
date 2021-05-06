import styled from 'styled-components';

export const StyledInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 15px;
  border: 4px solid #ece8e1;
  min-height: 30px;
  width: 100%;
  border-radius: 5px;
  color: ${(props) => (props.gameOver ? 'red' : '#edf0f5')};
  background: #060910;
  font-family: Quicksand, sans-serif;
  font-size: 1.1rem;
`;
