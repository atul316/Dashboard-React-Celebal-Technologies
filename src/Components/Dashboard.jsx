import React from 'react';
import ChartSection from './Charts';

const Dashboard = () => {
  return (
    <div>
      <div className="flex mb-4 space-x-4">
        <div className="w-1/3 p-4 bg-white rounded-lg shadow dark:bg-gray-900">
          <h2>Earnings</h2>
          <p>$63,448.78</p>
        </div>
        <div className="w-1/3 p-4 bg-white rounded-lg shadow dark:bg-gray-900">
          <h2>Customers</h2>
          <p>39,354</p>
        </div>
        <div className="w-1/3 p-4 bg-white rounded-lg shadow dark:bg-gray-900">
          <h2>Sales</h2>
          <p>423,39</p>
        </div>
      </div>
      <ChartSection />
    </div>
  );
};

export default Dashboard;
