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

const SectionTtitle = styled.div`
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

const Task = styled.form`
  width: 35rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const Section = styled.form`
  width: 35rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const Routine = styled.form`
  width: 35rem;
  height: 3rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

function Todo() {
  return (
    <div>
      <Header />
      <MainWrap>
        <BtnWrap>
          <Btn name={'작성'} />
          <Btn name={'취소'} />
        </BtnWrap>
        <TodoWrap>
          <TitleWrap>
            <TaskTitle>task</TaskTitle>
            <SectionTtitle>section</SectionTtitle>
            <RoutineTitle>routine</RoutineTitle>
          </TitleWrap>
          <FormWrap>
            <Task>task</Task>
            <Section>section</Section>
            <Routine>routine</Routine>
          </FormWrap>
        </TodoWrap>
      </MainWrap>
    </div>
  );
}

export default Todo;
