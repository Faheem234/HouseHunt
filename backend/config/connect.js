const mongoose = require('mongoose');

const connectionOfDb = () => {
  const mongoUri = process.env.MONGO_DB || process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('Missing MongoDB connection string. Set MONGO_DB or MONGO_URI in .env');
    process.exit(1);
  }

  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err}`);
      process.exit(1);
    });
};

module.exports = connectionOfDb;