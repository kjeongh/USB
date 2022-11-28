import React from 'react';
import styled from 'styled-components';

const ListBox = styled.div`
  width: 50rem;
  height: 3rem;
  margin-right: 1.8rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background-color: lightgray;
`;

function List() {
  return (
    <div>
      <ListBox />
    </div>
  );
}

export default List;
