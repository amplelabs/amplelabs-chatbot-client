import styled from 'styled-components';
import React from 'react';
import { theme } from '../../style/Variables.js';

const Form = styled.form`
  display: flex;
  align-items: stretch;
  padding: ${theme.padding};
  background: white;
  input {
    flex-grow: 1;
    border: 0;
    border-bottom: 1px solid ${theme.shadowGrey};
  }
  button {
    flex-shrink: 0;
  }
`;

export default function MessageInputForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.messageValue}
        placeholder="Type a message..."
        onChange={props.onChange}
      />
      <button>Submit</button>
    </Form>
  );
}
