import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GradesPage from './pages/GradesPage';
import ToDoPage from './pages/ToDoPage';
import InputPage from './pages/InputPage';

const App = () => {
  const [selectedName, setSelectedName] = useState('');

  return (
    <>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<GradesPage />} />
            <Route path="/todo" element={<ToDoPage onSelectName={setSelectedName} />} />
            <Route path="/input" element={<InputPage selectedName={selectedName} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
