import { useState, useEffect } from "react";
import { getExchangeRate } from "../services/exchangeService";

function ConverterCard({
  favorites,
  setFavorites,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  logs,
  setLogs,
}) {
  
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);

  const addFavorite = () => {
    const pair = `${fromCurrency}/${toCurrency}`;

    if (favorites.includes(pair)) return;

    const updated = [...favorites, pair];

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  const swapCurrencies = () => {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
};

  useEffect(() => {
    fetchRate();
  }, [fromCurrency, toCurrency]);

  async function fetchRate() {
    const liveRate = await getExchangeRate(
      fromCurrency,
      toCurrency
    );

    setRate(liveRate);
    setResult(amount * liveRate);
  }

  useEffect(() => {
    setResult(amount * rate);
  }, [amount, rate]);

  const addLog = () => {
  const entry = {
    id: Date.now(),

    amount,

    from: fromCurrency,

    to: toCurrency,

    result: result.toFixed(2),

    date: new Date().toLocaleString(),
  };

  const updatedLogs = [entry, ...logs];

  setLogs(updatedLogs);

  localStorage.setItem(
    "conversionLogs",
    JSON.stringify(updatedLogs)
  );
};

  return (
    <section className="converter-card">

      <h2>CHECK THE RATE</h2>

      <div className="converter-row">

        <div className="currency-box">

          <p>SEND</p>

          <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
          className="amount-input"
          />

          <button className="currency-btn">
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </button>

        </div>

        <button className="swap-btn" onClick={swapCurrencies}
        >
          ⇄
        </button>

        <div className="currency-box">

          <p>RECEIVE</p>

          <h1 className="receive-value">
            {result.toFixed(2)}
          </h1>

          <button className="currency-btn">
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </button>

        </div>

      </div>

      <div className="converter-footer">

        <p>
          1 {fromCurrency} = {rate?.toFixed(4)} {toCurrency}
        </p>

        <div className="action-buttons">

          <button className="favorite-btn" onClick={addFavorite}>
            ★ FAVORITED
          </button>

          <button
            className="log-btn"
            onClick={addLog}
          >
          LOG CONVERSION
          </button>
        </div>

      </div>

    </section>
  );
}

export default ConverterCard;