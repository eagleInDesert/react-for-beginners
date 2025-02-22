import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectedIndex(event.target.selectedIndex); // 선택된 옵션의 index 저장
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>Coin Tracker! (Amounts:{coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={handleSelectChange}>
            {coins.map((coin, index) => (
              <option key={index}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input
            onChange={onChange}
            value={dollar}
            placeholder="write dollar"
          ></input>
          <input
            onChange={onChange}
            value={dollar / coins[selectedIndex].quotes.USD.price}
            disabled={true}
          ></input>
        </>
      )}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectedIndex(event.target.selectedIndex); // 선택된 옵션의 index 저장
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h1>Coin Tracker! (Amounts:{coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select onChange={handleSelectChange}>
            {coins.map((coin, index) => (
              <option key={index}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input
            onChange={onChange}
            value={dollar}
            placeholder="write dollar"
          ></input>
          <input
            onChange={onChange}
            value={dollar / coins[selectedIndex].quotes.USD.price}
            disabled={true}
          ></input>
        </>
      )}
    </div>
  );
}

export default App;
