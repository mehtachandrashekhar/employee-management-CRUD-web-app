const Employee = require('../models/employeeModel');
const mongoose = require('mongoose');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Create new employee
const createEmployee = async (req, res) => {
    const { name, surname, department } = req.body;

    if (!name || !surname || !department) {
        res.status(400).json({ message: 'Please fill in all fields' });
        return;
    }

    try {
        const employee = new Employee({ name, surname, department });
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update employee
const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, surname, department } = req.body;

    try {
        const employee = await Employee.findById(id);

        if (!employee) {
            res.status(404).json({ message: 'Employee not found' });
            return;
        }

        employee.name = name || employee.name;
        employee.surname = surname || employee.surname;
        employee.department = department || employee.department;

        await employee.save();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete employee
const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        await Employee.deleteOne({ _id: id });
        res.status(200).json({ message: 'Employee removed' });
    } catch (error) {
        console.error('Error deleting employee:', error.message); // Log error message
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};
