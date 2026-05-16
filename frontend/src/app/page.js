// import StockCard from "../components/StockCard";
// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-5xl font-bold">
//         Stock Alerting App
//       </h1>
//       < StockCard name="Titan" price={100} percentage={-9}/>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import StockCard from "../components/StockCard";

import { fetchStocks }
  from "../services/stockService";

export default function Home() {

  const [stocks, setStocks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    async function loadStocks() {

      const data =
        await fetchStocks();

      setStocks(data);

      setLoading(false);
    }

    loadStocks();

  }, []);
const filteredStocks =
  stocks.filter((stock) =>
    stock.name.toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <div className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">

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
        onChange={(e) =>
          setSearch(e.target.value)
        }
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
      {
        loading ? (<p>Loading...</p>) : (
          <div className="
              flex
              gap-5
              flex-wrap
            ">
            {
              filteredStocks.map((stock) => (
                <StockCard
                  key={stock.name}
                  name={stock.name}
                  price={stock.price}
                  percentage={stock.percentage}
                />
              ))
            }
          </div>
        )
      }

    </div>
  );
}