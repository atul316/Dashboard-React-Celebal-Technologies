import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-200 dark:bg-gray-800 ">
      <div className="p-4">
        <h2 className="text-lg font-bold">Admin Pannel</h2>
      </div>
      <nav>
        <Link to="/" className="block p-4">Ecommerce</Link>
        <Link to="/orders" className="block p-4">Orders</Link>
        <Link to="/employees" className="block p-4">Employees</Link>
        <Link to="/customers" className="block p-4">Customers</Link>
        <Link to="/calendar" className="block p-4">Calendar</Link>
        <Link to="/kanban" className="block p-4">Kanban</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
