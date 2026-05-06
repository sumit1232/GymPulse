const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/myapp`);
    console.log(`MongoDB connected Success`);
  } catch (error) {
    console.log(`MongoDB connection Failed`); 
  }
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});

module.exports = connectDB;