import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MarketTicker from "../components/MarketTicker";
import ConverterCard from "../components/ConverterCard";
import Tabs from "../components/Tabs";
import StatsCards from "../components/StatsCards";
import ChartSection from "../components/ChartSection";
import Favorites from "../components/Favorites";
import Log from "../components/Log";
import Compare from "../components/Compare";

function Home() 
{
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem("conversionLogs");
    return saved ? JSON.parse(saved) : [];
    });

    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState(1000);
    const [activeTab, setActiveTab] = useState("history");
    const [compareRates, setCompareRates] = useState([]);
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
      generateCompareRates();
    }, [amount, fromCurrency]);

    const generateCompareRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );

    const data = await response.json();

    const targets = [
      "EUR",
      "GBP",
      "JPY",
      "CAD",
      "AUD",
    ];

    const results = targets.map((currency) => ({
      currency,
      value: amount * data.rates[currency],
    }));

    setCompareRates(results);
  } catch (error) {
    console.error(error);
  }
};


    useEffect(() => {
  setChartData([
    { date: "Apr 14", rate: 0.851 },
    { date: "Apr 18", rate: 0.847 },
    { date: "Apr 22", rate: 0.844 },
    { date: "Apr 26", rate: 0.846 },
    { date: "May 01", rate: 0.842 },
    { date: "May 05", rate: 0.855 },
    { date: "May 10", rate: 0.858 },
    { date: "May 14", rate: 0.853 },
  ]);
}, []);
  

    

  return (
    <>
      <Navbar />
      <MarketTicker />
      <ConverterCard
        favorites={favorites}
        setFavorites={setFavorites}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        amount={amount}
        setAmount={setAmount}
        logs={logs}
        setLogs={setLogs}
      />
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
      />
      {activeTab === "history" && (
        <>
      <StatsCards />

      <ChartSection 
        chartData={chartData}
        pair={`${fromCurrency}/${toCurrency}`} />
      </>
      )}
      
      {activeTab === "favorites" && (
      <Favorites 
       favorites={favorites}
       setFromCurrency={setFromCurrency}
       setToCurrency={setToCurrency} />
      )}

      {activeTab === "log" && (
        <Log
          logs={logs}
          setLogs={setLogs}
        />
      )}

      {activeTab === "compare" && (
        <Compare
          amount={amount}
          compareRates={compareRates}
        />
      )}

      <main className="container">
        {/* we'll pass props here next */}
      </main>

    </>
  );
}

export default Home;