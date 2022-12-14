/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
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
  font-size: 15pt;
  font-weight: bold;
  background-color: lightyellow;
  border: none;
`;

const RoutineBtn = styled.button`
  width: 7rem;
  height: 3rem;
  font-size: 15pt;
  font-weight: bold;
  background-color: lightgreen;
  border: none;
  color: white;
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
    background: lightgreen;
  }
  &::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 0.4rem;
  }
`;

const Select = styled.select`
  width: 8rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const StatusSelect = styled.select`
  width: 5rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
  margin-right: 0.5rem;
`;

const Option = styled.option`
  font-size: 15pt;
  font-weight: bold;
  text-align: center;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
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
  margin-right: 0.5rem;
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

const FixBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 10rem;
  font-size: 12pt;
  font-weight: bold;
  background-color: lightyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  border: none;
`;

function Mainpage() {
  const [contents, setContents] = useState([0]);
  const [status, setStatus] = useState([0]);

  const RoutineOptions = [
    { key: 1, value: 'Routine1' },
    { key: 2, value: 'Routine2' },
    { key: 3, value: 'Routine3' },
    { key: 4, value: 'Routine4' },
    { key: 5, value: 'Routine5' },
  ];

  const StatusOptions = [
    { key: 1, value: 'Todo' },
    { key: 2, value: 'Doing' },
    { key: 3, value: 'Done' },
  ];

  const onChangeTodo = (e) => {
    setContents(e.currentTarget.value);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <Header />
      <MainWrap>
        <form>
          <ListHeader>
            <LinkWrap>
              <TodoBtn>Todo</TodoBtn>
              <RoutineBtn>Routine</RoutineBtn>
            </LinkWrap>
            <BtnWrap>
              <Btn name={'Todo ??????'} />
            </BtnWrap>
          </ListHeader>
        </form>
        <ListWrap>
          <ListBox>
            <LabelWrap>
              <Label>Task1</Label>
              <Task>?????????????????????</Task>
              <StatusSelect onChange={onChangeStatus} value={status}>
                {StatusOptions.map((item, index) => (
                  <Option key={item.key} value={item.key}>
                    {item.value}
                  </Option>
                ))}
              </StatusSelect>
              <Select onChange={onChangeTodo} value={contents}>
                {RoutineOptions.map((item, index) => (
                  <Option key={item.key} value={item.key}>
                    {item.value}
                  </Option>
                ))}
              </Select>
              <FixBtn>??????</FixBtn>
              <FixBtn>??????</FixBtn>
            </LabelWrap>
          </ListBox>
          <ListBox>
            <LabelWrap>
              <Label>Task2</Label>
              <Task>????????????</Task>
              <StatusSelect>
                <Option>Done</Option>
              </StatusSelect>
              <Select>
                <Option>Routine5</Option>
              </Select>
              <FixBtn>??????</FixBtn>
              <FixBtn>??????</FixBtn>
            </LabelWrap>
          </ListBox>
          <ListBox>
            <LabelWrap>
              <Label>Task3</Label>
              <Task>?????????????????????</Task>
              <StatusSelect>
                <Option>Doing</Option>
              </StatusSelect>
              <Select>
                <Option>Routine3</Option>
              </Select>
              <FixBtn>??????</FixBtn>
              <FixBtn>??????</FixBtn>
            </LabelWrap>
          </ListBox>
        </ListWrap>
      </MainWrap>
    </div>
  );
}

export default Mainpage;
