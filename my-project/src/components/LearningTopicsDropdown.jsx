// src/components/LearningTopicsDropdown.jsx
import React, { useState } from 'react';

const LearningTopicsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown} 
        className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded"
      >
        Learning Topics
      </button>
      {isOpen && (
        <ul className="absolute right-0 w-48 mt-2 bg-white text-black shadow-lg rounded">
          <li><a href="#front-end" className="block px-4 py-2 hover:bg-gray-100">Front End</a></li>
          <li><a href="#back-end" className="block px-4 py-2 hover:bg-gray-100">Back End</a></li>
          <li><a href="#ui-ux" className="block px-4 py-2 hover:bg-gray-100">UI/UX</a></li>
          <li><a href="#digital-marketing" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</a></li>
        </ul>
      )}
    </div>
  );
};

export default LearningTopicsDropdown;
