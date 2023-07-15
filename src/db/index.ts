import mongoose from 'mongoose';

const connect = (cb?: any) => {
  console.log(process.env.MONGO_DB_URL);
  mongoose
    .connect(process.env.MONGO_DB_URL ?? '')
    .then(() => {
      console.log('MongoDB connected!');

      if (cb) {
        cb();
      }
    })
    .catch((e) => console.log(e));
};

export { connect };
