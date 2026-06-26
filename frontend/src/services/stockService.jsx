import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
export async function fetchStocks(symbol) {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
    console.log(response.data);
    return [
  {
    name: symbol.toUpperCase(),
    price: response.data.c,
    percentage: `${response.data.dp}%`
  }
];
  } catch (error) {
    console.error("Error fetching stocks:",error);
    return [];
  }

}