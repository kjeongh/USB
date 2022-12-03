/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

const MakeTodo = styled.button`
  width: 7rem;
  height: 3rem;
  font-size: 15pt;
  font-weight: bold;
  background-color: lightyellow;
  border: none;
`;

const TodoWrap = styled.div`
  width: 60rem;
  height: 10rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;
  background-color: lightyellow;
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

const TitleWrap = styled.div`
  width: 10rem;
  height: 10rem;
  margin: auto;
  padding-bottom: 1.5rem;
  margin-left: 7rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const TaskTitle = styled.div`
  width: 10rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
`;

const StatusTitle = styled.div`
  width: 10rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
`;

const FormWrap = styled.div`
  width: 35rem;
  height: 10rem;
  margin: auto;
  margin-right: 7rem;
  margin-top: 0.2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
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
          {/* <ListHeader>
            <LinkWrap>
              <MakeTodo value={task} onChange={taskHandler}>
                MakeTodo
              </MakeTodo>
            </LinkWrap>
            <BtnWrap>
              <Btn name={'Todo 작성'} onClick={postData} />
              <Btn name={'취소'} />
            </BtnWrap>
          </ListHeader>
          <TodoWrap>
            <TitleWrap>
              <TaskTitle>task</TaskTitle>
              <StatusTitle>status</StatusTitle>
            </TitleWrap>
            <FormWrap>
              <Task
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <Select onChange={onChangeTodo} value={contents}>
                {StatusOptions.map((item, index) => (
                  <Option key={item.key} value={item.key}>
                    {item.value}
                  </Option>
                ))}
              </Select>
            </FormWrap>
          </TodoWrap> */}
          <ListHeader>
            <LinkWrap>
              <TodoBtn>Todo</TodoBtn>
              <RoutineBtn>Routine</RoutineBtn>
            </LinkWrap>
            <BtnWrap>
              <Btn name={'Todo 작성'} />
            </BtnWrap>
          </ListHeader>
        </form>
        <ListWrap>
          <ListBox>
            <LabelWrap>
              <Label>Task1</Label>
              <Task>컴퓨터응용설계</Task>
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
              <FixBtn>수정</FixBtn>
              <FixBtn>삭제</FixBtn>
            </LabelWrap>
          </ListBox>
          <ListBox>
            <LabelWrap>
              <Label>Task2</Label>
              <Task>알고리즘</Task>
              <StatusSelect>
                <Option>Done</Option>
              </StatusSelect>
              <Select>
                <Option>Routine5</Option>
              </Select>
              <FixBtn>수정</FixBtn>
              <FixBtn>삭제</FixBtn>
            </LabelWrap>
          </ListBox>
          <ListBox>
            <LabelWrap>
              <Label>Task3</Label>
              <Task>컴퓨터응용설계</Task>
              <StatusSelect>
                <Option>Doing</Option>
              </StatusSelect>
              <Select>
                <Option>Routine3</Option>
              </Select>
              <FixBtn>수정</FixBtn>
              <FixBtn>삭제</FixBtn>
            </LabelWrap>
          </ListBox>
        </ListWrap>
      </MainWrap>
    </div>
  );
}

export default Mainpage;
