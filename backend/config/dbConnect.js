const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Library', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = dbConnect;

// Call the function to establish the database connection
dbConnect();