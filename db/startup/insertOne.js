// Run node db/startup/insertOne
require('dotenv').config();

const { connect } = require('..');

const { getRandomQuote } = require('../../utils/quotes');

const { Cat } = require('../models/cat');
const cat = new Cat({
  id: '1',
  url: 'https://cdn2.thecatapi.com/images/189.gif',
  date: Date.now(),
  quote: getRandomQuote(),
});

connect(() => {
  cat
    .save()
    .then(() => console.log('cat inserted to db'))
    .catch((err) => console.log(err))
    .finally(() => process.exit());
});
