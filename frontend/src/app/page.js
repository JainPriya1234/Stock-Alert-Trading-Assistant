"use client";
import Navbar from "../components/navbar";
import { useState } from "react";

import StockCard from "../components/StockCard";

const defaultStocks = [
  { name: "TCS", price: 3200, percentage: "+1.2%" },
  { name: "INFY", price: 1900, percentage: "+0.5%" },
  { name: "RELIANCE", price: 2400, percentage: "-0.3%" },
  { name: "HDFC", price: 2900, percentage: "+0.8%" },
  { name: "ICICI", price: 780, percentage: "+1.1%" },
  { name: "SBIN", price: 640, percentage: "-0.6%" },
  { name: "AXIS", price: 1000, percentage: "+2.0%" },
  { name: "LT", price: 2200, percentage: "+0.9%" },
  { name: "ITC", price: 410, percentage: "-0.2%" },
  { name: "HCLTECH", price: 1500, percentage: "+1.4%" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredStocks = defaultStocks.filter((stock) =>
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
          No stock found. Try one of the default 10 stocks.
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