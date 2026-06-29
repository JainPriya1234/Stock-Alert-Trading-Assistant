export default function StockCard({
  name, price, percentage
}) {
  const percentageDisplay = percentage ?? "N/A";
  const isNegative =
    typeof percentageDisplay === "string" &&
    percentageDisplay.includes("-");
  const percentageClass =
    percentageDisplay === "N/A"
      ? "text-zinc-400"
      : isNegative
      ? "text-red-400"
      : "text-green-400";

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
        {price != null ? `₹ ${price}` : "₹ --"}
      </p>

      <p className={`mt-2 ${percentageClass}`}>
        {percentageDisplay}
      </p>
    </div>

  );
}