import React, { useState } from 'react';
import { updateGrades, getData } from '../utils/Storage';

const GradeInput = ({ selectedName }) => {
  const [name, setName] = useState(selectedName || '');
  const [subject, setSubject] = useState('A');
  const [grade, setGrade] = useState('');

  const handleSubmit = () => {
    if (name && subject && grade) {
      const subjectUpperCase = subject.toUpperCase();
      if (subjectUpperCase >= 'A' && subjectUpperCase <= 'Z') {
        const students = getData('students') || [];
        const studentExists = students.some((student) => student.name === name);

        if (studentExists) {
          updateGrades(name, subjectUpperCase, grade);
          const studentClass = students.find((student) => student.name === name).studentClass;
          setName('');
          setSubject('A');
          setGrade('');
          alert(`Name: ${name}\nClass: ${studentClass}\nSubject: ${subjectUpperCase}\nGrade: ${grade}`);
        } else {
          alert(`Student with name "${name}" not found!`);
        }
      } else {
        alert('Subject must be a letter from A to Z.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Input Grades</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 w-full mb-2"
      >
        {Array.from({ length: 26 }, (_, i) => (
          <option key={i} value={String.fromCharCode(65 + i)}>
            {String.fromCharCode(65 + i)}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 w-full">Submit</button>
    </div>
  );
};

export default GradeInput;
