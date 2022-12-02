const axios = require('axios');

const fetchRandomCatImage = () => {
  return axios.get('https://api.thecatapi.com/v1/images/search');
};

module.exports = fetchRandomCatImage;
