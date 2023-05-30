const schedule = require('node-schedule');

// ** Models
const { Cat } = require('../db/models/cat');

// ** Utils
const fetchRandomCatImage = require('../services');
const { getRandomQuote } = require('../utils/quotes');

// second | minute | hour | day-of-month | month | day of week
// https://crontab.guru/every-day
const job = schedule.scheduleJob('0 0 * * *', function () {
  fetchRandomCatImage()
    .then((res) => {
      const { id, url } = res.data[0];

      const cat = new Cat({
        id,
        url,
        date: Date.now(),
        quote: getRandomQuote(),
      });

      cat
        .save()
        .then(() => console.log('Daily cat inserted!'))
        .catch((err) => console.log(err));
    })
    .finally(() => job.cancel());
});
