import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../../style/Variables.js';

const Name = styled.div`
  h1 {
    padding: ${theme.padding};
    background: white;
    border-bottom: 1px solid ${theme.transpGrey};
    box-shadow: 0 1px 5px -2px ${theme.transpGrey};
    margin-top: 0;
  }
`;

export default function Header() {
  return (
    <Name>
      <h1>Chalmers</h1>
    </Name>
  );
}
