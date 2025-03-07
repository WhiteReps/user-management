"use client";

import React, { useState } from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
  onAboutAccountClick: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, onAboutAccountClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-3 right-3">
      <button
        onClick={toggleDropdown}
        className="p-1 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        {children}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-[-3] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <button
            onClick={() => {
              onAboutAccountClick();
              setIsOpen(false);
            }}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;