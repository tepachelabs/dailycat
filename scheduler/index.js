const schedule = require('node-schedule');

// ** Models
const { Cat } = require('../db/models/cat');

// ** Utils
const fetchRandomCatImage = require('../services');
const { getRandomQuote } = require('../utils/quotes');

const rule = new schedule.RecurrenceRule();

rule.hour = 0;
rule.tz = 'Etc/UTC';

// second | minute | hour | day-of-month | month | day of week
// https://crontab.guru/#0_*/1_*_*_*
const job = schedule.scheduleJob(rule, function () {
  fetchRandomCatImage().then((res) => {
    const { id, url } = res.data[0];

    const cat = new Cat({
      id,
      url,
      date: Date.now(),
      quote: getRandomQuote(),
    });

    cat
      .save()
      .then(() => console.log('cat inserted to db'))
      .catch((err) => console.log(err));
  });
});
