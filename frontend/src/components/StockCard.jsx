export default function StockCard({
  name,
  price,
  percentage,
}) {
  const percentageDisplay = percentage ?? 'N/A';
  const isNegative = typeof percentageDisplay === 'string' && percentageDisplay.includes('-');
  const percentageClass =
    percentageDisplay === 'N/A'
      ? 'muted-text'
      : isNegative
      ? 'negative-text'
      : 'positive-text';

  return (
    <div className="stock-card">
      <h2 className="card-title">{name}</h2>

      <p className="stock-price">
        {price != null ? `₹ ${price}` : '₹ --'}
      </p>

      <p className={percentageClass}>{percentageDisplay}</p>
    </div>
  );
}