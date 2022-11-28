import React from 'react';
import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 15pt;
  font-weight: bold;
  text-align: center;
  border-radius: 2rem;
  background-color: green;
  color: white;
  width: 10rem;
  height: 2.5rem;
  margin-left: 1rem;
  border: none;
`;

function Button({ name }) {
  return <Btn>{name}</Btn>;
}

export default Button;
