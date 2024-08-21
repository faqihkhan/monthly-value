import React from 'react';
import ToDoList from '../components/ToDoList';

const ToDoPage = ({ onSelectName }) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
    <ToDoList onSelectName={onSelectName} />
  </div>
);

export default ToDoPage;
