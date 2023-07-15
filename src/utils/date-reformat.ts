const moment = require('moment');
export const catsWithDateFormatted = (cats: any) => {
  return cats.map((cat: any) => {
    return {
      id: cat.id,
      url: cat.url,
      quote: cat.quote,
      date: moment(cat.date).format('MMMM Do YYYY'),
    };
  });
};
