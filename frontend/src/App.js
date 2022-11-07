import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RoutinePage from './pages/RoutinePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/RoutinePage' element={<RoutinePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
