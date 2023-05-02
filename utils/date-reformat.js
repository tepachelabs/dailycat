const moment = require('moment');
const catsWithDateFormatted = (cats) => {
  return cats.map((cat) => {
    return {
      id: cat.id,
      url: cat.url,
      quote: cat.quote,
      date: moment(cat.date).format('MMMM Do YYYY'),
    };
  });
};

module.exports = { catsWithDateFormatted };
