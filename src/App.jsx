import React, { useContext, useState } from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Kanban from './Components/Kaban';
import Orders from './Components/Orders';
import Employees from './Components/Employees';
import Customers from './Components/Customers';
import Calendar from './Components/Calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Components/Themecontext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header toggleTheme={() => setDarkMode(!darkMode)} />
            <div className="p-4">
              <Routes>
                <Route path="/" exact element={<Dashboard/>} />
                <Route path="/kanban" element={<Kanban/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/customers" element={<Customers/>} />
                <Route path="/calendar" element={<Calendar/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
