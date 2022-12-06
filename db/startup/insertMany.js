require('..');

const { cats } = require('../../mock/data');
const { Cat } = require('../models/cat');

Cat.insertMany(cats)
  .then((result) => {
    console.log('The data has been added to the database!');
  })
  .catch((err) => {
    console.log(err);
  });
