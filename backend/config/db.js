const mongoose = require('mongoose');


const connectDB = async function main() {
  await mongoose.connect('mongodb://localhost:27017/employee');
  
  console.log('Database Connected Successfully');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = connectDB;
