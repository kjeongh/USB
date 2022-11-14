import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Btn from '../Components/Button';

const MainWrap = styled.div`
  width: 65rem;
  height: 45rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem;
  padding: 1rem;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: 2.7rem;
`;

const ListWrap = styled.div`
  width: 60rem;
  height: 40rem;
  margin: auto;
  padding-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: lightyellow;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 1rem;
    border-radius: 0.4rem;
    background: rgba(158, 197, 124);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.4rem;
  }
`;

const ListBox = styled.nav`
  width: 50rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background-color: lightgray;
  border: 1px solid black;
`;

function Mainpage() {
  return (
    <div>
      <Header />
      <MainWrap>
        <BtnWrap>
          <Btn name={'수정'} />
          <Btn name={'추가'} />
          <Btn name={'삭제'} />
        </BtnWrap>
        <ListWrap>
          <ul>
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
            <ListBox />
          </ul>
        </ListWrap>
      </MainWrap>
    </div>
  );
}

export default Mainpage;
