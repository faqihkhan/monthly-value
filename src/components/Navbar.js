// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-500 p-4 text-white">
    <ul className="flex space-x-4">
      <li><Link to="/">Grades</Link></li>
      <li><Link to="/todo">To-Do List</Link></li>
      <li><Link to="/input">Input Grades</Link></li>
    </ul>
  </nav>
);

export default Navbar;
