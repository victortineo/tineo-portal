import React from 'react';
import styled from 'styled-components';

const ConsoleScreen = styled.button`
  background: black;
`;

const Title = styled.h3`
  color: #cec;
`;

const ConsoleText = styled.p`
  color: darkgreen;
`

export default function Console({ title }){
  return (
    <ConsoleScreen>
      <Title>Current Console</Title>
      <ConsoleText>{title}</ConsoleText>
    </ConsoleScreen>
  )
}