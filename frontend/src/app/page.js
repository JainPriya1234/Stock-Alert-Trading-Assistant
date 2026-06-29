"use client";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";

import StockCard from "../components/StockCard";
import { fetchStocks } from "../services/stockService";

const defaultSymbols = [
  "MSFT",
  "AAPL",
  "AMZN",
  "TIGO",
  "KPGLF",
  "TSLA",
  "DELL",
  "VZ",
  "MCD",
  "NVDA",
];

export default function Home() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStocks() {
      try {
        const results = await Promise.all(
          defaultSymbols.map(async (symbol) => {
            const data = await fetchStocks(symbol);
            return data[0] || {
              name: symbol,
              price: null,
              percentage: "N/A",
            };
          })
        );

        setStocks(results);
      } catch (fetchError) {
        setError("Unable to fetch stock prices. Please check your API key and network.");
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
    <div className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">
      <Navbar />
      <h1 className="
        text-5xl
        font-bold
        mb-10
      ">
        Stock Alerting App
      </h1>
      <input
        type="text"
        placeholder="Search stock..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          bg-zinc-900
          border
          border-zinc-700
          px-4
          py-3
          rounded-xl
          w-full
          mb-8
        "
      />

      {showNotFound ? (
        <p className="text-red-400 text-xl">
          No stock found.
        </p>
      ) : (
        <div className="
            flex
            gap-5
            flex-wrap
          ">
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
    </div>
  );
}
// import Navbar from "../components/navbar";

// export default function Home() {

//   return (

//     <div className="
//       min-h-screen
//       bg-black
//       text-white
//     ">

//       <Navbar />

//     </div>

//   );
// }