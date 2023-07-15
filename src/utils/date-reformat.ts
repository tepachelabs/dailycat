// ** Third Party
import moment from 'moment';

// ** Types
import { Cat } from '../db/models/catModel';

export const catsWithDateFormatted = (cats: Cat[]) => {
  return cats.map((cat) => {
    return {
      id: cat.id,
      url: cat.url,
      quote: cat.quote,
      date: moment(cat.date).format('MMMM Do YYYY'),
    };
  });
};
