/**
 *
 * This is real data from thecatapi. Keeping it here so we don't have to call
 * the real api for the moment.
 *
 * https://api.thecatapi.com/
 */
const cats = [
  {
    id: "es",
    url: "https://cdn2.thecatapi.com/images/es.jpg",
    date: Date.now(),
  },
  {
    id: "189",
    url: "https://cdn2.thecatapi.com/images/189.gif",
    date: Date.now(),
  },
  {
    id: "dt8",
    url: "https://cdn2.thecatapi.com/images/dt8.jpg",
    date: Date.now(),
  }
];

module.exports = {
  cats,
};
