import styled from 'styled-components';

const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  padding: 0;
  flex-grow: 1;
  overflow: auto;
`;

export default MessageList;