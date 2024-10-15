import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createEmployee = async (employee) => {
  await axios.post(API_URL, employee);
};

export const updateEmployee = async (id, employee) => {
  await axios.put(`${API_URL}/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error.message);
  }
};
