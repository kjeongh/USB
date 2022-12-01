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

const TodoWrap = styled.div`
  width: 65rem;
  height: 45rem;
  margin: auto;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: lightyellow;
`;

const BtnWrap = styled.div`
  width: 20rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: 2rem;
`;

const TitleWrap = styled.div`
  width: 15rem;
  height: 30rem;
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

const RoutineTitle = styled.div`
  width: 10rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
`;

const FormWrap = styled.div`
  width: 40rem;
  height: 30rem;
  margin: auto;
  margin-right: 7rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Task = styled.input`
  width: 35rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const Routine = styled.input`
  width: 35rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const StatusSelect = styled.select`
  width: 35.3rem;
  height: 3.2rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const StatusOption = styled.option`
  font-size: 15pt;
  font-weight: bold;
  text-align: center;
`;

function Todo() {
  const [Content, setContent] = useState();
  const [Tasks, setTasks] = useState(null);
  const [Status, setStatus] = useState(null);

  const onChangeHandler = (e) => {
    setContent(e.currentTarget.value);
  };

  const StatusOptions = [
    { key: 1, value: 'Todo' },
    { key: 2, value: 'Doing' },
    { key: 3, value: 'Done' },
  ];

  const onTasks = async () => {
    const Tasks = new Tasks();
    await axios({
      method: 'post',
      url: '',
      data: Tasks,
      headers: {
        'Contenet-Type': 'application/json',
      },
    });
  };

  const onStatus = async () => {
    const Status = new Status();
    await axios({
      method: 'post',
      url: '',
      data: Status,
      headers: {
        'Contenet-Type': 'application/json',
      },
    });
  };

  return (
    <div>
      <Header />
      <MainWrap>
        <BtnWrap>
          <Btn name={'작성'} onChange={{ onTasks, onStatus }} />
          <Btn name={'취소'} />
        </BtnWrap>
        <TodoWrap>
          <TitleWrap>
            <TaskTitle>task</TaskTitle>
            <StatusTitle>status</StatusTitle>
            <RoutineTitle>routine</RoutineTitle>
          </TitleWrap>
          <FormWrap>
            <Task />
            <StatusSelect onChange={onChangeHandler} value={Content}>
              {StatusOptions.map((item, index) => (
                <StatusOption key={item.key} value={item.key}>
                  {item.value}
                </StatusOption>
              ))}
            </StatusSelect>
            <Routine />
          </FormWrap>
        </TodoWrap>
      </MainWrap>
    </div>
  );
}

export default Todo;
