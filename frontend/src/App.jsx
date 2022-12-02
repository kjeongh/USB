import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RoutinePage from './pages/RoutinePage';
import Todo from './pages/Todo';
import Routine from './pages/Routine';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/RoutinePage' element={<RoutinePage />} />
          <Route path='/Todo' element={<Todo />} />
          <Route path='/Routine' element={<Routine />} />
          <Route path='/List' element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
