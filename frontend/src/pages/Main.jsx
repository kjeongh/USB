import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../Components/Header';
import Btn from '../Components/Button';
import ListBox from '../Components/GetList';

const TodoForm = styled.form`
  width: 60rem;
  height: 15rem;
  padding-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: lightyellow;
`;

const TaskWrap = styled.div`
  width: 40rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const TodoLabel = styled.label`
  font-size: 15pt;
  font-weight: bold;
  margin-right: 1rem;
`;

const TodoInput = styled.input`
  width: 35rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const ListWrap = styled.div`
  width: 60rem;
  height: 20rem;
  margin: auto;
  margin-top: 1rem;
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

const url = 'http://localhost:8000/api/v1/';

const Main = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        user_id: 1,
        task: task,
        status: status,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <TodoForm onSubmit={handleSubmit}>
        <TaskWrap>
          <TodoLabel>task</TodoLabel>
          <TodoInput
            type='text'
            id='task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </TaskWrap>
        <TaskWrap>
          <TodoLabel>status</TodoLabel>
          <TodoInput
            type='text'
            id='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </TaskWrap>
        <Btn name='투두 작성' onClick={handleSubmit}>
          <Link
            to={{ pathname: '/List' }}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          />
        </Btn>
      </TodoForm>
      <ListWrap>
        <ListBox />
      </ListWrap>
    </div>
  );
};

export default Main;
