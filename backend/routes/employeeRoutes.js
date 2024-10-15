const express = require('express');
const {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../contorollers/employeeController');

const router = express.Router();

router.route('/')
  .get(getAllEmployees)
  .post(createEmployee);

router.route('/:id')
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
