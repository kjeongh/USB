import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 100vw;
  font-style: normal;
  font-weight: bolder;
  font-size: 30pt;
  padding: 3rem;
  align-items: center;
`;

function Header() {
  return (
    <div>
      <Title>Todo Done</Title>
    </div>
  );
}

export default Header;
