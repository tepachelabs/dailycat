// Run node db/startup/insertOne

const { connect } = require('..');

const { Cat } = require('../models/cat');
const cat = new Cat({
  id: '1',
  url: 'https://cdn2.thecatapi.com/images/189.gif',
  date: Date.now(),
});

connect(() => {
  cat
    .save()
    .then(() => console.log('cat inserted to db'))
    .catch((err) => console.log(err))
    .finally(() => process.exit());
});
