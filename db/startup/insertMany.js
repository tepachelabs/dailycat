// Run node db/startup/insertMany

const { connect } = require('..');

const { cats } = require('../../mock/data');
const { Cat } = require('../models/cat');

connect(() => {
  Cat.insertMany(cats)
    .then(() => console.log('The data has been added to the database!'))
    .catch((err) => console.log(err))
    .finally(() => process.exit());
});
