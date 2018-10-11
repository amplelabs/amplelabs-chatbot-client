import styled from 'styled-components';
import { theme } from '../../style/Variables.js';

const Message = styled.li`
  align-self: ${props => (props.author === 'user' ? 'flex-end' : 'flex-start')};
  max-width: 500px;
  overflow: auto;
  min-height: 60px;
  margin: 1rem 0;
  border-radius: ${theme.borderRadius};
  background: ${props => (props.author === 'user' ? theme.yellow : 'white')};
  /* background: ${p => p.options && 'none'}; */
  box-shadow: ${theme.boxShadow};
  padding: ${theme.padding}; 
`;

export default Message;
