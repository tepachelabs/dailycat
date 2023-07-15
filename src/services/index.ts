const axios = require('axios');

export const fetchRandomCatImage = () => {
  return axios.get('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': process.env.CAT_API_KEY,
    },
  });
};
