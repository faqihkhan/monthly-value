import React from 'react';
import { getData } from '../utils/Storage';

const GradesTable = () => {
  const students = getData('students') || [];

  return (
    <div className="max-w-7xl mx-auto mt-6 overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-0 min-w-[50px] sticky left-0 bg-blue-500">No</th>
            <th className="py-2 px-4 min-w-[150px] sticky left-[50px] bg-blue-500">Name</th>
            <th className="py-2 px-4">Class</th>
            {/* Header untuk subjek A-Z */}
            {Array.from({ length: 26 }, (_, i) => (
              <th key={i} className="py-2 px-4 whitespace-nowrap">{String.fromCharCode(65 + i)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.name} className="border-b">
              <td className="py-2 px-4 min-w-[50px] sticky left-0 bg-white">{index + 1}</td>
              <td className="py-2 px-4 min-w-[150px] sticky left-[50px] bg-white">{student.name}</td>
              <td className="py-2 px-4">{student.studentClass}</td>
              {/* Nilai untuk subjek A-Z */}
              {Array.from({ length: 26 }, (_, i) => (
                <td key={i} className="py-2 px-4 text-center">{student.grades[String.fromCharCode(65 + i)]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradesTable;
