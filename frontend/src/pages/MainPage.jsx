import React from 'react';
import { Link } from 'react-router-dom';
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

const ListHeader = styled.div`
  width: 60rem;
  align-items: center;
  display: flex;
`;

const LinkWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  display: flex;
`;

const LinkBtn = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 1rem;
  font-size: 15pt;
  font-weight: bold;
  background-color: purple;
  color: white;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
  padding: 1rem;
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
    background: skyblue;
  }
  &::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 0.4rem;
  }
`;

const ListBox = styled.div`
  width: 50rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background-color: lightgray;
`;

function Mainpage() {
  return (
    <div>
      <Header />
      <MainWrap>
        <ListHeader>
          <LinkWrap>
            <LinkBtn>
              <Link
                to={{ pathname: '/' }}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Todo
              </Link>
            </LinkBtn>
            <LinkBtn>
              <Link
                to={{ pathname: '/RoutinePage' }}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Routine
              </Link>
            </LinkBtn>
          </LinkWrap>
          <BtnWrap>
            <Btn name={'수정'} />
            <Btn name={'추가'} />
            <Btn name={'삭제'} />
          </BtnWrap>
        </ListHeader>
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
