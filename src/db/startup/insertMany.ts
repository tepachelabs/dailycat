// Run node db/startup/insertMany
import dotenv from 'dotenv';
dotenv.config();

import { connect } from '../index';

import { cats } from '../../mock/data';
import { Cat } from '../models/cat';

connect(() => {
  Cat.insertMany(cats)
    .then(() => console.log('The data has been added to the database!'))
    .catch((err) => console.log(err))
    .finally(() => process.exit());
});
