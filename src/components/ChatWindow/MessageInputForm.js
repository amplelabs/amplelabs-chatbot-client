import styled from 'styled-components';
import React from 'react';

export default function MessageInputForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        value={props.messageValue}
        placeholder="Type a message..."
        onChange={props.onChange}
      />
      <button>Submit</button>
    </form>
  );
}
