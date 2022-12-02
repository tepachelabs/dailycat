const schedule = require('node-schedule');
const fetchRandomCatImage = require('../services');
const { cats } = require('../mock/data');

// second | minute | hour | day-of-month | month | day of week
// https://crontab.guru/#0_*/1_*_*_*
const job = schedule.scheduleJob('*/10 * * * * *', function () {
  fetchRandomCatImage().then((res) => {
    cats.push({
      ...res.data[0],
      date: 'some date',
    });
  });
});
