import styled from 'styled-components';

export const StyledGameComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background: #d9ffed;
  background-size: cover;
  overflow: hidden;
`;

export const StyledGame = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 1000px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;