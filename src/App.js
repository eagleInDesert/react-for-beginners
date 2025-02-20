import React, {useEffect, useState} from 'react';

function App() {
  const {loading, setLoading} = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    //setLoading(false);
  });
  <div>
    <h1>Coin Tracker!</h1>
    {loading ? <strong>"Loading..."</strong> : "We are ready"}
  </div>
}

export default App;
