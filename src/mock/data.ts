import { getRandomQuote } from '../utils/quotes';

const today = Date.now();

export const cats: any = [];

for (let i = 0; i < 100; i++) {
  const cat = {
    id: i.toString(),
    url: `https://cdn2.thecatapi.com/images/1.jpg`,
    date: today - i * 24 * 60 * 60 * 1000,
    quote: getRandomQuote(),
  };

  cats.push(cat);
}
