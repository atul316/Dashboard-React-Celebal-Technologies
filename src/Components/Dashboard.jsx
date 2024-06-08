import React from 'react';
import ChartSection from './Charts';

const Dashboard = () => {
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-1/3">
          <h2>Earnings</h2>
          <p>$63,448.78</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-1/3">
          <h2>Customers</h2>
          <p>39,354</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-1/3">
          <h2>Sales</h2>
          <p>423,39</p>
        </div>
      </div>
      <ChartSection />
    </div>
  );
};

export default Dashboard;
