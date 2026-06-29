import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import StockCard from './components/StockCard';
import { fetchStocks } from './services/stockService';

const defaultSymbols = ['TCS', 'INFY', 'RELIANCE', 'HDFC', 'ICICI', 'SBIN', 'AXIS', 'LT', 'ITC', 'HCLTECH'];

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadStocks() {
      try {
        const results = await Promise.all(
          defaultSymbols.map(async (symbol) => {
            const data = await fetchStocks(symbol);
            return data[0] || { name: symbol, price: null, percentage: 'N/A' };
          })
        );

        setStocks(results);
      } catch (fetchError) {
        setError('Unable to fetch stock prices. Please check your API key and network.');
      } finally {
        setLoading(false);
      }
    }

    loadStocks();
  }, []);

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  const showNotFound = search.length > 0 && filteredStocks.length === 0;

  return (
    <div className="app-shell">
      <Navbar />
      <main className="content-area">
        <input
          type="text"
          placeholder="Search stock..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {loading ? (
          <p className="status-text">Loading...</p>
        ) : showNotFound ? (
          <p className="status-text error">No stock found.</p>
        ) : (
          <div className="card-grid">
            {error ? <p className="status-text error">{error}</p> : null}
            {filteredStocks.map((stock) => (
              <StockCard
                key={stock.name}
                name={stock.name}
                price={stock.price}
                percentage={stock.percentage}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
