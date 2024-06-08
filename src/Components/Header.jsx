import React, { useContext } from 'react';
import { ThemeContext } from '../Components/Themecontext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-gray-900 dark:text-white">Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="p-2 text-gray-900 bg-gray-300 rounded dark:bg-gray-700 dark:text-gray-300"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Header;
