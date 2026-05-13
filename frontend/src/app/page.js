import StockCard from "../components/StockCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        Stock Alerting App
      </h1>
      < StockCard name="Titan" price={100} percentage={-9}/>
    </div>
  );
}