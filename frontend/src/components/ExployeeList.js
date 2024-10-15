import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>{emp.name} {emp.surname} - {emp.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
