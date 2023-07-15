import axios from 'axios';

type TheCatAPIResponse = {
  id: string;
  url: string;
  width: number;
  height: number;
}[];

export const fetchRandomCatImage = () => {
  return axios.get<TheCatAPIResponse>(
    'https://api.thecatapi.com/v1/images/search',
    {
      headers: {
        'x-api-key': process.env.CAT_API_KEY,
      },
    }
  );
};
