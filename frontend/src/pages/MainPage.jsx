/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Components/Header';
import Btn from '../Components/Button';
import ListBox from '../Components/List';

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
  margin-right: 2rem;
`;

function Mainpage() {
  const [contents, setContents] = useState([0]);
  const [task, setTask] = useState('');

  const StatusOptions = [
    { key: 1, value: 'Todo' },
    { key: 2, value: 'Doing' },
    { key: 3, value: 'Done' },
  ];

  const taskHandler = (e) => {
    e.preventDefault();
    setTask(e.target.task.value);
    console.log(task);
  };

  const onChangeTodo = (e) => {
    setContents(e.currentTarget.value);
  };

  const postData = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/v1', {
        user_id: '1',
        task: task,
        status: contents,
      })
      .then((res) => console.log('posting data', res))
      .catch((err) => console.log(err));
  };

  const getData = () => {
    const [getTodo, setGetTodo] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8000').then((response) => {
        setGetTodo(response.data);
      });
    }, []);
  };

  return (
    <div>
      <Header />
      <MainWrap>
        <form>
          <ListHeader>
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
          </TodoWrap>
          <ListHeader>
            <LinkWrap>
              <TodoBtn>Todo</TodoBtn>
            </LinkWrap>
          </ListHeader>
        </form>
        <ListWrap>
          <ul>
            <ListBox />
          </ul>
        </ListWrap>
      </MainWrap>
    </div>
  );
}

export default Mainpage;
