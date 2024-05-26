const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/myDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDb;
