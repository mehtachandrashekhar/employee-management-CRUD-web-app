const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
