// src/utils/storage.js

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const updateStudent = (name, studentClass) => {
    const students = getData('students') || [];
    
    // Buat object grades dengan placeholder nilai 0 untuk subjek A-Z
    const grades = {};
    for (let i = 0; i < 26; i++) {
      grades[String.fromCharCode(65 + i)] = 0; // A-Z
    }
    
    students.push({ name, studentClass, grades });
    saveData('students', students);
  };
  
  export const updateGrades = (name, subject, grade) => {
    const students = getData('students') || [];
    const student = students.find((s) => s.name === name);
    if (student) {
      student.grades[subject] = grade;
      saveData('students', students);
    }
  };
  
  