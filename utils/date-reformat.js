const moment = require('moment');
const dateFormat = (cats) => {
  return cats.map((cat) => {
    return {
      id: cat.id,
      url: cat.url,
      date: moment(cat.date).format('MMMM Do YYYY'),
    };
  });
};

module.exports = { dateFormat };
