// Run node db/startup/insertOne
import dotenv from 'dotenv';

dotenv.config();

import { connect } from '..';

import { getRandomQuote } from '../../utils/quotes';

import { Cat } from '../models/cat';

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