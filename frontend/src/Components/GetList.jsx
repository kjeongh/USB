import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const TodoTitle = styled.div`
  width: 20rem;
  height: 2rem;
  font-size: 15pt;
  margin-right: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  border: 1px solid black;
`;

const Status = styled.div`
  width: 10rem;
  height: 2rem;
  font-size: 15pt;
  margin-right: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  border: 1px solid black;
`;

const Select = styled.select`
  width: 10rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
`;

const Option = styled.option`
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
`;

const url = 'http://localhost:8000/api/v1/todos';

const GetList = () => {
  const [Content, setContent] = useState();

  const onChangeHandler = (e) => {
    setContent(e.currentTarget.value);
  };

  const RoutineOptions = [
    { key: 4, value: 'Mon' },
    { key: 5, value: 'Tue' },
    { key: 6, value: 'Wed' },
    { key: 7, value: 'Thu' },
    { key: 8, value: 'Fri' },
    { key: 9, value: 'Sat' },
    { key: 10, value: 'Sun' },
  ];

  const getData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ListBox>
        <TodoTitle />
        <Status />
        <Select onChange={onChangeHandler} value={Content}>
          {RoutineOptions.map((item, index) => (
            <Option key={item.key} value={item.key}>
              {item.value}
            </Option>
          ))}
        </Select>
      </ListBox>
    </div>
  );
};

export default GetList;
