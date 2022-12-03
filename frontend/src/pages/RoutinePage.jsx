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
  padding-top: 2rem;
  align-items: center;
  display: flex;
`;

const TodoBtn = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 1rem;
  font-size: 15pt;
  font-weight: bold;
  background-color: lightgreen;
  color: white;
  border: none;
`;

const RoutineBtn = styled.button`
  width: 7rem;
  height: 3rem;
  margin-left: 1rem;
  font-size: 15pt;
  font-weight: bold;
  background-color: lightyellow;
  border: none;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
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
  margin-right: 1.8rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  border-radius: 2rem;
  background-color: lightgreen;
`;

const Task = styled.div`
  width: 15rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 15pt;
  font-weight: bold;
  margin-right: 0.5rem;
`;

function Mainpage() {
  return (
    <div>
      <Header />
      <MainWrap>
        <ListHeader>
          <LinkWrap>
            <TodoBtn>
              <Link
                to={{ pathname: '/' }}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Todo
              </Link>
            </TodoBtn>
            <RoutineBtn>
              <Link
                to={{ pathname: '/RoutinePage' }}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Routine
              </Link>
            </RoutineBtn>
          </LinkWrap>
          <BtnWrap>
            <Link
              to={{ pathname: '/Routine' }}
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <Btn name={'루틴 작성'} />
            </Link>
          </BtnWrap>
        </ListHeader>
        <ListWrap>
          <ul>
            <ListBox>
              <LabelWrap>
                <Label>Routine1</Label>
                <Task>Mon</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine2</Label>
                <Task>Tue</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine3</Label>
                <Task>Wed</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine4</Label>
                <Task>Thu</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine5</Label>
                <Task>Fri</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine6</Label>
                <Task>Sat</Task>
              </LabelWrap>
            </ListBox>
            <ListBox>
              <LabelWrap>
                <Label>Routine7</Label>
                <Task>Sun</Task>
              </LabelWrap>
            </ListBox>
          </ul>
        </ListWrap>
      </MainWrap>
    </div>
  );
}

export default Mainpage;
