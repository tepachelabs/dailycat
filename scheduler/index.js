const schedule = require('node-schedule');
const fetchRandomCatImage = require('../services');
const { Cat } = require('../db/models/cat');

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
    });

    cat
      .save()
      .then(() => console.log('cat inserted to db'))
      .catch((err) => console.log(err));
  });
});
