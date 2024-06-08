import React from 'react';
import MaterialTable from '@material-table/core';

const customersData = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', country: 'USA', status: 'Active' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8901', country: 'UK', status: 'Inactive' },
  { id: 3, name: 'Jim Beam', email: 'jim.beam@example.com', phone: '345-678-9012', country: 'Canada', status: 'Active' },
  { id: 4, name: 'Anna Bell', email: 'anna.bell@example.com', phone: '456-789-0123', country: 'Australia', status: 'Active' },
  { id: 5, name: 'Chris Green', email: 'chris.green@example.com', phone: '567-890-1234', country: 'Germany', status: 'Inactive' },
  { id: 6, name: 'Lisa Black', email: 'lisa.black@example.com', phone: '678-901-2345', country: 'France', status: 'Active' },
  { id: 7, name: 'Paul White', email: 'paul.white@example.com', phone: '789-012-3456', country: 'Italy', status: 'Active' },
  { id: 8, name: 'Mary Brown', email: 'mary.brown@example.com', phone: '890-123-4567', country: 'Spain', status: 'Inactive' },
  { id: 9, name: 'Mike Blue', email: 'mike.blue@example.com', phone: '901-234-5678', country: 'Mexico', status: 'Active' },
  { id: 10, name: 'Sara Red', email: 'sara.red@example.com', phone: '012-345-6789', country: 'China', status: 'Active' },
  { id: 11, name: 'Tom Grey', email: 'tom.grey@example.com', phone: '123-456-7891', country: 'Japan', status: 'Inactive' },
  { id: 12, name: 'Amy Purple', email: 'amy.purple@example.com', phone: '234-567-8902', country: 'South Korea', status: 'Active' },
  { id: 13, name: 'Jack Yellow', email: 'jack.yellow@example.com', phone: '345-678-9013', country: 'India', status: 'Active' },
  { id: 14, name: 'Lucy Pink', email: 'lucy.pink@example.com', phone: '456-789-0124', country: 'Brazil', status: 'Inactive' },
  { id: 15, name: 'Gary Orange', email: 'gary.orange@example.com', phone: '567-890-1235', country: 'Russia', status: 'Active' },
  { id: 16, name: 'Linda Violet', email: 'linda.violet@example.com', phone: '678-901-2346', country: 'South Africa', status: 'Active' },
  { id: 17, name: 'Henry Gold', email: 'henry.gold@example.com', phone: '789-012-3457', country: 'Argentina', status: 'Inactive' },
  { id: 18, name: 'Nancy Silver', email: 'nancy.silver@example.com', phone: '890-123-4568', country: 'Chile', status: 'Active' },
  { id: 19, name: 'Frank Bronze', email: 'frank.bronze@example.com', phone: '901-234-5679', country: 'Colombia', status: 'Active' },
  { id: 20, name: 'Grace Platinum', email: 'grace.platinum@example.com', phone: '012-345-6790', country: 'Peru', status: 'Inactive' },
];

const Customers = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <MaterialTable
        title="Customers"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone', field: 'phone' },
          { title: 'Country', field: 'country' },
          { title: 'Status', field: 'status' },
        ]}
        data={customersData}
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

export default Customers;
