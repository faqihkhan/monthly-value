import React, { useState } from 'react';
import { updateStudent, getData, saveData } from '../utils/Storage';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ToDoList = ({ onSelectName }) => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const students = getData('students') || [];

  const handleAdd = () => {
    if (name && studentClass) {
      updateStudent(name, studentClass);
      setName('');
      setStudentClass('');
    }
  };

  const handleDelete = (name) => {
    const filteredStudents = students.filter((s) => s.name !== name);
    saveData('students', filteredStudents);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white p-2 w-full mb-4">Add</button>

      <ul className="mb-4">
        {students.map((student) => (
          <li key={student.name} className="flex justify-between items-center mb-2">
            <span>{student.name} - {student.studentClass}</span>
            <button>
              <FaEdit className="inline mx-2 text-yellow-500 cursor-pointer" onClick={() => onSelectName(student.name)} />
              <FaTrash className="inline mx-2 text-red-500 cursor-pointer" onClick={() => handleDelete(student.name)} />
            </button>
          </li>
        ))}
      </ul>

      {/* Bagian baru untuk memilih nama yang sudah ada */}
      <div>
        <h3 className="text-lg font-bold mb-2">Select Existing Student</h3>
        <ul>
          {students.map((student) => (
            <li key={student.name} className="cursor-pointer text-blue-500 hover:underline" onClick={() => onSelectName(student.name)}>
              {student.name} - {student.studentClass}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
