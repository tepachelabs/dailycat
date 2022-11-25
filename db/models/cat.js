const mongoose = require('mongoose');

const { Schema } = mongoose;

const catSchema = new Schema({
  id: String,
  url: String,
  date: Date,
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = {
  Cat,
};
