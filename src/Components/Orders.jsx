import React from 'react';
import MaterialTable from '@material-table/core';

const ordersData = [
  { id: 1, item: 'Fresh Tomato', customerName: 'Vinet', amount: '$32.38', status: 'Pending', orderId: '10248', location: 'USA' },
  { id: 2, item: 'Butter Scotch', customerName: 'Carson Darrin', amount: '$56.34', status: 'Complete', orderId: '345653', location: 'Delhi' },
  { id: 3, item: 'Candy Gucci', customerName: 'Fran Perez', amount: '$93.31', status: 'Active', orderId: '390457', location: 'New York' },
  { id: 4, item: 'Night Lamp', customerName: 'Anika Viseer', amount: '$93.31', status: 'Canceled', orderId: '893486', location: 'Germany' },
  { id: 5, item: 'Healthcare Erbology', customerName: 'Miron Vitold', amount: '$23.99', status: 'Rejected', orderId: '748975', location: 'Spain' },
  { id: 6, item: 'Apple Juice', customerName: 'John Doe', amount: '$12.50', status: 'Pending', orderId: '123456', location: 'Canada' },
  { id: 7, item: 'Orange Juice', customerName: 'Jane Smith', amount: '$15.75', status: 'Complete', orderId: '654321', location: 'UK' },
  { id: 8, item: 'Banana Split', customerName: 'Robert Brown', amount: '$8.90', status: 'Active', orderId: '112233', location: 'Australia' },
  { id: 9, item: 'Mango Shake', customerName: 'Lucy Gray', amount: '$18.45', status: 'Canceled', orderId: '998877', location: 'India' },
  { id: 10, item: 'Strawberry Cake', customerName: 'Peter Parker', amount: '$20.00', status: 'Rejected', orderId: '445566', location: 'Japan' },
  { id: 11, item: 'Grape Juice', customerName: 'Bruce Wayne', amount: '$13.75', status: 'Pending', orderId: '778899', location: 'China' },
  { id: 12, item: 'Blueberry Muffin', customerName: 'Clark Kent', amount: '$5.99', status: 'Complete', orderId: '667788', location: 'Russia' },
  { id: 13, item: 'Raspberry Tart', customerName: 'Diana Prince', amount: '$10.50', status: 'Active', orderId: '334455', location: 'Brazil' },
  { id: 14, item: 'Cherry Pie', customerName: 'Barry Allen', amount: '$25.00', status: 'Canceled', orderId: '556677', location: 'France' },
  { id: 15, item: 'Pineapple Upside-down Cake', customerName: 'Arthur Curry', amount: '$30.00', status: 'Rejected', orderId: '445577', location: 'Italy' },
  { id: 16, item: 'Watermelon Sorbet', customerName: 'Victor Stone', amount: '$7.80', status: 'Pending', orderId: '334466', location: 'Mexico' },
  { id: 17, item: 'Peach Cobbler', customerName: 'Hal Jordan', amount: '$14.90', status: 'Complete', orderId: '223355', location: 'South Korea' },
  { id: 18, item: 'Blackberry Jam', customerName: 'Oliver Queen', amount: '$6.40', status: 'Active', orderId: '112244', location: 'Sweden' },
  { id: 19, item: 'Lemonade', customerName: 'Dinah Lance', amount: '$2.50', status: 'Canceled', orderId: '223344', location: 'Norway' },
  { id: 20, item: 'Cranberry Juice', customerName: 'John Stewart', amount: '$8.20', status: 'Rejected', orderId: '332211', location: 'Finland' },
];

const Orders = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <MaterialTable
        title="Orders"
        columns={[
          { title: 'Image', render: rowData => <img src={`https://via.placeholder.com/50?text=${rowData.item}`} alt={rowData.item} /> },
          { title: 'Item', field: 'item' },
          { title: 'Customer Name', field: 'customerName' },
          { title: 'Total Amount', field: 'amount' },
          { title: 'Status', field: 'status' },
          { title: 'Order ID', field: 'orderId' },
          { title: 'Location', field: 'location' },
        ]}
        data={ordersData}
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

export default Orders;
