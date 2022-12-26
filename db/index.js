const mongoose = require('mongoose');

const connect = (cb) => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log('MongoDB connected!');

      if (cb) {
        cb();
      }
    })
    .catch(() => console.log('MongoDB failed to connect :('));
};

module.exports = {
  connect,
};
