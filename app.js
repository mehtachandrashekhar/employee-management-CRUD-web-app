const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data for initial employees
let employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' }
];

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Route to get all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// Route to get an employee by ID
app.get('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === id);
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  res.json(employee);
});

// Route to add a new employee
app.post('/api/employees', (req, res) => {
  const { name, position } = req.body;
  if (!name || !position) {
    return res.status(400).json({ message: 'Name and position are required' });
  }
  const id = employees.length + 1;
  const newEmployee = { id, name, position };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// Route to update an existing employee
app.put('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, position } = req.body;
  const employee = employees.find(emp => emp.id === id);
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employee.name = name || employee.name;
  employee.position = position || employee.position;
  res.json(employee);
});

// Route to delete an employee
app.delete('/api/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Employee not found' });
  }
  employees.splice(index, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
