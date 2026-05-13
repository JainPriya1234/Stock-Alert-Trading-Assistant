export default function StockCard({
  name, price, percentage
}) {
  const isNegative = percentage<0;

  return (
    <div className="
      bg-zinc-900
      p-5
      rounded-2xl
      border
      border-zinc-800
      w-72
    ">
      <h2 className="text-2xl font-bold">
        {name}
      </h2>

      <p className="text-xl mt-3">
        ₹ {price}
      </p>

      <p className={`mt-2 ${isNegative
          ? "text-red-400"
          : "text-green-400"
        }`}>
        {percentage}
      </p>
    </div>

  );
}