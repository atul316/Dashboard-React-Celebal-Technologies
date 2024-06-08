import React, { useContext } from 'react';
import { ThemeContext } from '../Components/Themecontext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-gray-800 dark:text-white">Celebal Internship</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 rounded"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Header;
