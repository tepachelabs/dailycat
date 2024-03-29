import schedule from 'node-schedule';

// ** Models
import { CatModel } from '../db/models/catModel';

// ** Utils
import { fetchRandomCatImage } from '../services';
import { getRandomQuote } from '../utils/quotes';

// second | minute | hour | day-of-month | month | day of week
// https://crontab.guru/every-day
const job = schedule.scheduleJob('0 0 * * *', function () {
  fetchRandomCatImage().then((res) => {
    const { id, url } = res.data[0];

    const cat = new CatModel({
      id,
      url,
      date: Date.now(),
      quote: getRandomQuote(),
    });

    cat
      .save()
      .then(() => console.log('Daily cat inserted!'))
      .catch((err) => console.log(err));
  });
});
