import React, { useState } from 'react';
import { createEmployee } from '../services/api';

const EmployeeForm = ({ refreshEmployees }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee({ name, surname, department });
    refreshEmployees();  // Refresh the list after adding an employee
    setName('');
    setSurname('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
