import React from 'react';
import GradeInput from '../components/GradeInput';

const InputPage = ({ selectedName }) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Input Grades</h1>
    <GradeInput selectedName={selectedName} />
  </div>
);

export default InputPage;
