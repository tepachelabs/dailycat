const { getRandomQuote } = require('../utils/quotes');

const today = Date.now();
const oneDayAgo = today - 24 * 60 * 60 * 1000;
const twoDaysAgo = today - 2 * 24 * 60 * 60 * 1000;

/**
 *
 * This is real data from thecatapi. Keeping it here so we don't have to call
 * the real api for the moment.
 *
 * https://api.thecatapi.com/
 */
const cats = [
  {
    id: 'es',
    url: 'https://cdn2.thecatapi.com/images/es.jpg',
    date: Date.now(),
    quote: getRandomQuote(),
  },
  {
    id: '189',
    url: 'https://cdn2.thecatapi.com/images/189.gif',
    quote: getRandomQuote(),
  },
  {
    id: 'dt8',
    url: 'https://cdn2.thecatapi.com/images/dt8.jpg',
    date: twoDaysAgo,
  },
];

module.exports = {
  cats,
};
