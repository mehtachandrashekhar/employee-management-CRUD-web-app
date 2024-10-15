import React from 'react';
import { deleteEmployee } from '../services/api';

const EmployeeList = ({ employees, refreshEmployees }) => {

  const handleDelete = async (id) => {
    console.log('Deleting employee with ID:', id); // Log the ID
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee(id);
      refreshEmployees();  // Refresh the employee list after deletion
    }
  };
  

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} {emp.surname} - {emp.department}
            <button onClick={() => handleDelete(emp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
