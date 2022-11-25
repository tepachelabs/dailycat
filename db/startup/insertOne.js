// Run node db/startup/insertOne

require('..');

const { Cat } = require('../models/cat');
const cat = new Cat({
  id: '1',
  url: 'my-dummy-url',
  date: Date.now(),
});

cat.save()
   .then(() => console.log('cat inserted to db'))
   .catch(() => console.log('failed to insert :('));