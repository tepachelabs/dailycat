// ** Utils
import { getRandomQuote } from '../utils/quotes';

// ** Types
import { Cat } from '../db/models/catModel';

const today = Date.now();

export const cats: Cat[] = [];

for (let i = 0; i < 100; i++) {
  const cat: Cat = {
    id: i.toString(),
    url: `https://cdn2.thecatapi.com/images/1.jpg`,
    date: new Date(today - i * 24 * 60 * 60 * 1000),
    quote: getRandomQuote(),
  };

  cats.push(cat);
}
