import styled from 'styled-components';
import { theme } from '../../style/Variables.js';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${theme.bgGrey};
  color: ${theme.darkGrey};
`;

export default MainContainer;
