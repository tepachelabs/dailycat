const mongoose = require('mongoose');

const connect = (cb) => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/test')
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
