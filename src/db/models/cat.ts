import mongoose from 'mongoose';

const { Schema } = mongoose;

const catSchema = new Schema(
  {
    id: String,
    url: String,
    quote: String,
    date: Date,
  },
  {
    bufferCommands: false,
  }
);

const Cat = mongoose.model('Cat', catSchema);

export { Cat };
