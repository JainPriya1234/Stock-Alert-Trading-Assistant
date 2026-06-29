import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchStocks(symbol) {
  if (!API_KEY) {
    return [];
  }

  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
    return [
      {
        name: symbol.toUpperCase(),
        price: response.data.c,
        percentage: `${response.data.dp}%`,
      },
    ];
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return [];
  }
}