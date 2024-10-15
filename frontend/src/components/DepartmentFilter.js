import React from 'react';

const DepartmentFilter = ({ onFilter }) => {
  const departments = ['All', 'General Dentistry', 'Pediatric Dentistry', 'Restorative Dentistry', 'Surgery', 'Orthodontics'];

  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      {departments.map(dept => (
        <option key={dept} value={dept}>{dept}</option>
      ))}
    </select>
  );
};

export default DepartmentFilter;
