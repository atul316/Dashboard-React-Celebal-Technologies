import React from 'react';

const Kanban = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Kanban Board</h1>
      <div className="flex space-x-4">
        <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="mb-4">To Do</h2>
          <div>Task 1</div>
          <div>Task 2</div>
        </div>
        <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="mb-4">In Progress</h2>
          <div>Task 3</div>
          <div>Task 4</div>
        </div>
        <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
          <h2 className="mb-4">Done</h2>
          <div>Task 5</div>
          <div>Task 6</div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
