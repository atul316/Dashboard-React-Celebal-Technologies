import React from 'react';
import MaterialTable from '@material-table/core';

const employeesData = [
  { id: 1, name: 'Michael Smith', position: 'Manager', department: 'Sales', location: 'USA', status: 'Active' },
  { id: 2, name: 'Sarah Johnson', position: 'Developer', department: 'IT', location: 'UK', status: 'Active' },
  { id: 3, name: 'David Williams', position: 'Designer', department: 'Marketing', location: 'Germany', status: 'Inactive' },
  { id: 4, name: 'Emma Brown', position: 'Manager', department: 'Finance', location: 'France', status: 'Active' },
  { id: 5, name: 'James Jones', position: 'Developer', department: 'IT', location: 'Italy', status: 'Active' },
  { id: 6, name: 'Emily Davis', position: 'HR', department: 'Human Resources', location: 'Canada', status: 'Active' },
  { id: 7, name: 'Christopher Garcia', position: 'Developer', department: 'IT', location: 'Spain', status: 'Inactive' },
  { id: 8, name: 'Olivia Martinez', position: 'Designer', department: 'Marketing', location: 'Australia', status: 'Active' },
  { id: 9, name: 'Daniel Wilson', position: 'Manager', department: 'Operations', location: 'China', status: 'Active' },
  { id: 10, name: 'Sophia Anderson', position: 'Sales Executive', department: 'Sales', location: 'Brazil', status: 'Inactive' },
  { id: 11, name: 'Matthew Thomas', position: 'Manager', department: 'Finance', location: 'Russia', status: 'Active' },
  { id: 12, name: 'Isabella White', position: 'HR', department: 'Human Resources', location: 'Japan', status: 'Active' },
  { id: 13, name: 'Ethan Harris', position: 'Developer', department: 'IT', location: 'Mexico', status: 'Inactive' },
  { id: 14, name: 'Ava Martin', position: 'Designer', department: 'Marketing', location: 'India', status: 'Active' },
  { id: 15, name: 'William Thompson', position: 'Sales Executive', department: 'Sales', location: 'South Korea', status: 'Active' },
  { id: 16, name: 'Mia Rodriguez', position: 'Manager', department: 'Operations', location: 'Finland', status: 'Active' },
  { id: 17, name: 'Alexander Clark', position: 'Developer', department: 'IT', location: 'Sweden', status: 'Inactive' },
  { id: 18, name: 'Charlotte Lewis', position: 'HR', department: 'Human Resources', location: 'Norway', status: 'Active' },
  { id: 19, name: 'Michael Walker', position: 'Manager', department: 'Operations', location: 'Netherlands', status: 'Inactive' },
  { id: 20, name: 'Sophia Young', position: 'Designer', department: 'Marketing', location: 'Denmark', status: 'Active' },
];

const Employees = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employees</h2>
      <MaterialTable
        title="Employees"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Position', field: 'position' },
          { title: 'Department', field: 'department' },
          { title: 'Location', field: 'location' },
          { title: 'Status', field: 'status' },
        ]}
        data={employeesData}
        options={{
          search: true,
          paging: true,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          exportButton: true,
        }}
      />
    </div>
  );
};

export default Employees;
