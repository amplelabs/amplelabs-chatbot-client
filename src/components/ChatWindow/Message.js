import styled from 'styled-components';

const Message = styled.li`
  align-self: ${props => props.author === 'user' ? 'flex-end' : 'flex-start'};
  width: 200px;
  margin: 5px 0px;
  background: #e5e5e5;
`;

export default Message;