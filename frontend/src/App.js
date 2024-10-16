import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import DepartmentFilter from './components/DepartmentFilter';
import { getEmployees } from './services/api';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Function to fetch employees from the backend
  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
    setFilteredEmployees(data);
  };

  const handleFilter = (department) => {
    if (department === 'All') {
      setFilteredEmployees(employees);
    } else {
      setFilteredEmployees(employees.filter(emp => emp.department === department));
    }
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <DepartmentFilter onFilter={handleFilter} />
      <EmployeeForm refreshEmployees={fetchEmployees} />  {/* Pass refreshEmployees here too */}
      <EmployeeList employees={filteredEmployees} refreshEmployees={fetchEmployees} />  {/* Pass refreshEmployees */}
    </div>
  );
};

export default App;
