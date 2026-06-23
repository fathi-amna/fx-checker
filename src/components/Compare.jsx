function Compare({ amount, compareRates }) {
  return (
    <div className="compare-panel">
      <h3>COMPARE CURRENCIES</h3>

      {compareRates.map((item) => (
        <div
          key={item.currency}
          className="compare-item"
        >
          <span>{item.currency}</span>

          <strong>
            {item.value.toFixed(2)}
          </strong>
        </div>
      ))}
    </div>
  );
}

export default Compare;