const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/speed-dating-nn';

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`MongoDB connected: ${MONGODB_URI}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

module.exports = {
  connectDatabase,
};
